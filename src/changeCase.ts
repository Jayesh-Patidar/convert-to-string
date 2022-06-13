const toSentenceCase = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const toTitleCase = (string: string): string => {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

const toLowerCase = (string: string): string => {
  return string.toLowerCase();
};

const toUpperCase = (string: string): string => {
  return string.toUpperCase();
};

export const changeCase = (words: string, changeCaseTo: string): string => {
  switch (changeCaseTo) {
    case "sentence":
      return toSentenceCase(words);
    case "title":
      return toTitleCase(words);
    case "lower":
      return toLowerCase(words);
    case "upper":
      return toUpperCase(words);
    default:
      return words;
  }
};
