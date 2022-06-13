import { expect } from "chai";
import { numberWords } from "../index";

describe("Convert number to word test cases", () => {
  it("Check number is desired range", () => {
    expect(() => numberWords(100000000001)).to.Throw(
      Error,
      "Number should be in range of -100000000000 to 100000000000"
    );
  });

  it("Convert positive number in the range", () => {
    expect(numberWords(1)).to.equal("one");
    expect(numberWords(9)).to.equal("nine");
    expect(numberWords(10)).to.equal("ten");
    expect(numberWords(12)).to.equal("twelve");
    expect(numberWords(19)).to.equal("nineteen");
    expect(numberWords(30)).to.equal("thirty");
    expect(numberWords(45)).to.equal("forty five");
    expect(numberWords(78)).to.equal("seventy eight");
    expect(numberWords(78)).to.equal("seventy eight");
    expect(numberWords(99)).to.equal("ninety nine");
    expect(numberWords(105)).to.equal("one hundred five");
    expect(numberWords(117)).to.equal("one hundred seventeen");
    expect(numberWords(555)).to.equal("five hundred fifty five");
    expect(numberWords(600)).to.equal("six hundred");
    expect(numberWords(789)).to.equal("seven hundred eighty nine");
    expect(numberWords(1111)).to.equal("one thousand one hundred eleven");
    expect(numberWords(1438)).to.equal(
      "one thousand four hundred thirty eight"
    );
    expect(numberWords(5666)).to.equal("five thousand six hundred sixty six");
    expect(numberWords(8000)).to.equal("eight thousand");
    expect(numberWords(10000)).to.equal("ten thousand");
    expect(numberWords(11001)).to.equal("eleven thousand one");
    expect(numberWords(11051)).to.equal("eleven thousand fifty one");
    expect(numberWords(11601)).to.equal("eleven thousand six hundred one");
    expect(numberWords(51411)).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(numberWords(99999)).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(numberWords(100001)).to.equal("one lakh one");
    expect(numberWords(101010)).to.equal("one lakh one thousand ten");
    expect(numberWords(100110)).to.equal("one lakh one hundred ten");
    expect(numberWords(2112201)).to.equal(
      "twenty one lakh twelve thousand two hundred one"
    );
    expect(numberWords(9090000)).to.equal("ninety lakh ninety thousand");
    expect(numberWords(30000001)).to.equal("three crore one");
    expect(numberWords(30000021)).to.equal("three crore twenty one");
    expect(numberWords(40000205)).to.equal("four crore two hundred five");
    expect(numberWords(40302043)).to.equal(
      "four crore three lakh two thousand forty three"
    );
    expect(numberWords(201150634)).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty four"
    );
    expect(numberWords(204050634)).to.equal(
      "twenty crore forty lakh fifty thousand six hundred thirty four"
    );
    expect(numberWords(204750634)).to.equal(
      "twenty crore forty seven lakh fifty thousand six hundred thirty four"
    );
    expect(numberWords(264951634)).to.equal(
      "twenty six crore forty nine lakh fifty one thousand six hundred thirty four"
    );
  });

  it("Check negative number in the range", () => {
    expect(numberWords(-10000)).to.equal("minus ten thousand");
    expect(numberWords(-100001)).to.equal("minus one lakh one");
    expect(numberWords(-101010)).to.equal("minus one lakh one thousand ten");
    expect(numberWords(-100110)).to.equal("minus one lakh one hundred ten");
    expect(numberWords(-2112201)).to.equal(
      "minus twenty one lakh twelve thousand two hundred one"
    );
    expect(numberWords(-9090000)).to.equal("minus ninety lakh ninety thousand");
    expect(numberWords(-30000001)).to.equal("minus three crore one");
    expect(numberWords(-30000021)).to.equal("minus three crore twenty one");
    expect(numberWords(-40000205)).to.equal(
      "minus four crore two hundred five"
    );
    expect(numberWords(-40302043)).to.equal(
      "minus four crore three lakh two thousand forty three"
    );
  });

  it("Check locale config", () => {
    expect(numberWords(11601, { locale: "en-US" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(numberWords(51411, { locale: "en-US" })).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(numberWords(99999, { locale: "en-US" })).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(numberWords(100001, { locale: "en-US" })).to.equal(
      "one hundred thousand one"
    );
    expect(numberWords(101010, { locale: "en-US" })).to.equal(
      "one hundred one thousand ten"
    );
    expect(numberWords(100110, { locale: "en-US" })).to.equal(
      "one hundred thousand one hundred ten"
    );
    expect(numberWords(2112201, { locale: "en-US" })).to.equal(
      "two million one hundred twelve thousand two hundred one"
    );
    expect(numberWords(9090000, { locale: "en-US" })).to.equal(
      "nine million ninety thousand"
    );
    expect(numberWords(30000001, { locale: "en-US" })).to.equal(
      "thirty million one"
    );
    expect(numberWords(30000021, { locale: "en-US" })).to.equal(
      "thirty million twenty one"
    );
    expect(numberWords(40000205, { locale: "en-US" })).to.equal(
      "forty million two hundred five"
    );
    expect(numberWords(40302043, { locale: "en-US" })).to.equal(
      "forty million three hundred two thousand forty three"
    );
    expect(numberWords(201150634, { locale: "en-US" })).to.equal(
      "two hundred one million one hundred fifty thousand six hundred thirty four"
    );
    expect(numberWords(204050634, { locale: "en-US" })).to.equal(
      "two hundred four million fifty thousand six hundred thirty four"
    );
    expect(numberWords(2640951634, { locale: "en-US" })).to.equal(
      "two billion six hundred forty million nine hundred fifty one thousand six hundred thirty four"
    );
  });

  it("Check ordinal words config", () => {
    expect(numberWords(11601, { toOrdinalWords: true })).to.equal(
      "eleven thousand six hundred first"
    );
    expect(
      numberWords(51411, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("fifty one thousand four hundred eleventh");
    expect(numberWords(99999, { toOrdinalWords: true })).to.equal(
      "ninety nine thousand nine hundred ninety ninth"
    );
    expect(
      numberWords(100001, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand first");
    expect(numberWords(101010, { toOrdinalWords: true })).to.equal(
      "one lakh one thousand tenth"
    );
    expect(
      numberWords(100110, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand one hundred tenth");
    expect(numberWords(2112201, { toOrdinalWords: true })).to.equal(
      "twenty one lakh twelve thousand two hundred first"
    );
    expect(
      numberWords(9090000, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("nine million ninety thousandth");
    expect(numberWords(30000001, { toOrdinalWords: true })).to.equal(
      "three crore first"
    );
    expect(
      numberWords(30000021, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("thirty million twenty first");
    expect(numberWords(40000205, { toOrdinalWords: true })).to.equal(
      "four crore two hundred fifth"
    );
    expect(
      numberWords(40302043, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("forty million three hundred two thousand forty third");
    expect(numberWords(201150634, { toOrdinalWords: true })).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty fourth"
    );
    expect(
      numberWords(204050634, { locale: "en-US", toOrdinalWords: true })
    ).to.equal(
      "two hundred four million fifty thousand six hundred thirty fourth"
    );
    expect(numberWords(2640951634, { toOrdinalWords: true })).to.equal(
      "two arab sixty four crore nine lakh fifty one thousand six hundred thirty fourth"
    );
  });

  it("Check ordinal config", () => {
    expect(numberWords(11601, { toOrdinal: true })).to.equal("11601st");
    expect(numberWords(51411, { toOrdinal: true })).to.equal("51411th");
    expect(numberWords(99999, { toOrdinal: true })).to.equal("99999th");
    expect(numberWords(100001, { toOrdinal: true })).to.equal("100001st");
    expect(numberWords(101010, { toOrdinal: true })).to.equal("101010th");
    expect(numberWords(100110, { toOrdinal: true })).to.equal("100110th");
    expect(numberWords(2112201, { toOrdinal: true })).to.equal("2112201st");
    expect(numberWords(9090000, { toOrdinal: true })).to.equal("9090000th");
    expect(numberWords(30000001, { toOrdinal: true })).to.equal("30000001st");
    expect(numberWords(30000021, { toOrdinal: true })).to.equal("30000021st");
    expect(numberWords(40000205, { toOrdinal: true })).to.equal("40000205th");
    expect(numberWords(40302040, { toOrdinal: true })).to.equal("40302040th");
    expect(numberWords(201150634, { toOrdinal: true })).to.equal("201150634th");
    expect(numberWords(204050634, { toOrdinal: true })).to.equal("204050634th");
    expect(numberWords(2640951634, { toOrdinal: true })).to.equal(
      "2640951634th"
    );
  });

  it("Check change case config", () => {
    expect(numberWords(11601, { changeCaseTo: "lower" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(numberWords(51411, { changeCaseTo: "title" })).to.equal(
      "Fifty One Thousand Four Hundred Eleven"
    );
    expect(numberWords(99999, { changeCaseTo: "sentence" })).to.equal(
      "Ninety nine thousand nine hundred ninety nine"
    );
    expect(numberWords(100001, { changeCaseTo: "upper" })).to.equal(
      "ONE LAKH ONE"
    );
  });

  it("All checks combined", () => {
    expect(numberWords(755546)).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(numberWords(-755546)).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(numberWords(755546, { locale: "en-IN" })).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(numberWords(-755546, { locale: "en-IN" })).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(numberWords(755546, { locale: "en-US" })).to.equal(
      "seven hundred fifty five thousand five hundred forty six"
    );
    expect(numberWords(-755546, { locale: "en-US" })).to.equal(
      "minus seven hundred fifty five thousand five hundred forty six"
    );

    expect(
      numberWords(755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      numberWords(-755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(numberWords(755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "755546th"
    );
    expect(numberWords(-755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "-755546th"
    );

    expect(
      numberWords(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      numberWords(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(
      numberWords(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "title",
      })
    ).to.equal("Seven Lakh Fifty Five Thousand Five Hundred Forty Sixth");
    expect(
      numberWords(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "sentence",
      })
    ).to.equal("Minus seven lakh fifty five thousand five hundred forty sixth");
  });
});
