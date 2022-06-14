import { changeCase } from "./changeCase";
import { NumberToStringOptions } from "./interface";
import * as locales from "./locales";

const MAX_NUMBER = 100000000000;

const isNumberInDesiredRange = (number: number): boolean => {
  return number < MAX_NUMBER;
};

const isNegativeNumber = (number: number): boolean => {
  return number < 0;
};

const getLocaleKey = (locale: string): string => {
  switch (locale) {
    case "en-IN":
      return "enIn";
    case "en-US":
      return "enUs";
    default:
      return "enIn";
  }
};

const convertToOrdinal = (number: number): string => {
  const numberString = String(number);
  const lastTwoDigits = Math.abs(number % 100);
  const betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
  const lastChar = numberString.charAt(numberString.length - 1);

  return (
    numberString +
    (betweenElevenAndThirteen
      ? "th"
      : lastChar === "1"
      ? "st"
      : lastChar === "2"
      ? "nd"
      : lastChar === "3"
      ? "rd"
      : "th")
  );
};

const convertToOrdinalWords = (
  string: string,
  locale: string = "en-IN"
): string => {
  const wordsArray: string[] = string.split(" ");
  const wordToBeConvertedToOrdinalWord = wordsArray.reverse()[0];

  for (const item of locales[locale]) {
    if (item.word === wordToBeConvertedToOrdinalWord) {
      wordsArray.shift();
      wordsArray.unshift(item.ordinalWord);
      break;
    }
  }

  return wordsArray.reverse().join(" ");
};

export const numberToString = (
  number: number,
  options?: undefined | NumberToStringOptions
): string => {
  if (!isNumberInDesiredRange(number)) {
    throw new RangeError(
      `Number should be in range of -${MAX_NUMBER} to ${MAX_NUMBER}`
    );
  }

  let result: string = "";

  options = options || {
    locale: "en-IN",
    toOrdinal: false,
    toOrdinalWords: false,
    changeCaseTo: "lower",
  };

  const localeKey = getLocaleKey(options.locale);

  if (isNegativeNumber(number)) {
    result = "minus ";
  }

  let absoluteNumber = parseInt(String(Math.abs(number)));

  for (let item of locales[localeKey]) {
    const { number: key, word } = item;
    if (absoluteNumber >= key) {
      if (absoluteNumber <= 99) {
        result += word;
        absoluteNumber -= key;
        if (absoluteNumber > 0) {
          result += " ";
        } else {
          break;
        }
      } else {
        const digit: number = Math.floor(absoluteNumber / key);
        const remainder: number = absoluteNumber % key;

        if (remainder > 0) {
          result += `${numberToString(digit, {
            locale: options.locale,
          })} ${word} ${numberToString(remainder, { locale: options.locale })}`;
          break;
        } else {
          result += `${numberToString(digit, {
            locale: options.locale,
          })} ${word}`;
          break;
        }
      }
    }
  }
  if (options.toOrdinalWords) {
    result = convertToOrdinalWords(result, localeKey);
  } else if (options.toOrdinal) {
    result = convertToOrdinal(number);
  }

  if (options.changeCaseTo) {
    result = changeCase(result, options.changeCaseTo);
  }

  return result;
};
