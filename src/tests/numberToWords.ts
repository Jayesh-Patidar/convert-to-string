import { expect } from "chai";
import { convertToString } from "../index";

describe("Convert number to word test cases", () => {
  it("Check number is desired range", () => {
    expect(() => convertToString(100000000001)).to.Throw(
      Error,
      "Number should be in range of -100000000000 to 100000000000"
    );
  });

  it("Convert positive number in the range", () => {
    expect(convertToString(1)).to.equal("one");
    expect(convertToString(9)).to.equal("nine");
    expect(convertToString(10)).to.equal("ten");
    expect(convertToString(12)).to.equal("twelve");
    expect(convertToString(19)).to.equal("nineteen");
    expect(convertToString(30)).to.equal("thirty");
    expect(convertToString(45)).to.equal("forty five");
    expect(convertToString(78)).to.equal("seventy eight");
    expect(convertToString(78)).to.equal("seventy eight");
    expect(convertToString(99)).to.equal("ninety nine");
    expect(convertToString(105)).to.equal("one hundred five");
    expect(convertToString(117)).to.equal("one hundred seventeen");
    expect(convertToString(555)).to.equal("five hundred fifty five");
    expect(convertToString(600)).to.equal("six hundred");
    expect(convertToString(789)).to.equal("seven hundred eighty nine");
    expect(convertToString(1111)).to.equal("one thousand one hundred eleven");
    expect(convertToString(1438)).to.equal(
      "one thousand four hundred thirty eight"
    );
    expect(convertToString(5666)).to.equal("five thousand six hundred sixty six");
    expect(convertToString(8000)).to.equal("eight thousand");
    expect(convertToString(10000)).to.equal("ten thousand");
    expect(convertToString(11001)).to.equal("eleven thousand one");
    expect(convertToString(11051)).to.equal("eleven thousand fifty one");
    expect(convertToString(11601)).to.equal("eleven thousand six hundred one");
    expect(convertToString(51411)).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(convertToString(99999)).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(convertToString(100001)).to.equal("one lakh one");
    expect(convertToString(101010)).to.equal("one lakh one thousand ten");
    expect(convertToString(100110)).to.equal("one lakh one hundred ten");
    expect(convertToString(2112201)).to.equal(
      "twenty one lakh twelve thousand two hundred one"
    );
    expect(convertToString(9090000)).to.equal("ninety lakh ninety thousand");
    expect(convertToString(30000001)).to.equal("three crore one");
    expect(convertToString(30000021)).to.equal("three crore twenty one");
    expect(convertToString(40000205)).to.equal("four crore two hundred five");
    expect(convertToString(40302043)).to.equal(
      "four crore three lakh two thousand forty three"
    );
    expect(convertToString(201150634)).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty four"
    );
    expect(convertToString(204050634)).to.equal(
      "twenty crore forty lakh fifty thousand six hundred thirty four"
    );
    expect(convertToString(204750634)).to.equal(
      "twenty crore forty seven lakh fifty thousand six hundred thirty four"
    );
    expect(convertToString(264951634)).to.equal(
      "twenty six crore forty nine lakh fifty one thousand six hundred thirty four"
    );
  });

  it("Check negative number in the range", () => {
    expect(convertToString(-10000)).to.equal("minus ten thousand");
    expect(convertToString(-100001)).to.equal("minus one lakh one");
    expect(convertToString(-101010)).to.equal("minus one lakh one thousand ten");
    expect(convertToString(-100110)).to.equal("minus one lakh one hundred ten");
    expect(convertToString(-2112201)).to.equal(
      "minus twenty one lakh twelve thousand two hundred one"
    );
    expect(convertToString(-9090000)).to.equal("minus ninety lakh ninety thousand");
    expect(convertToString(-30000001)).to.equal("minus three crore one");
    expect(convertToString(-30000021)).to.equal("minus three crore twenty one");
    expect(convertToString(-40000205)).to.equal(
      "minus four crore two hundred five"
    );
    expect(convertToString(-40302043)).to.equal(
      "minus four crore three lakh two thousand forty three"
    );
  });

  it("Check locale config", () => {
    expect(convertToString(11601, { locale: "en-US" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(convertToString(51411, { locale: "en-US" })).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(convertToString(99999, { locale: "en-US" })).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(convertToString(100001, { locale: "en-US" })).to.equal(
      "one hundred thousand one"
    );
    expect(convertToString(101010, { locale: "en-US" })).to.equal(
      "one hundred one thousand ten"
    );
    expect(convertToString(100110, { locale: "en-US" })).to.equal(
      "one hundred thousand one hundred ten"
    );
    expect(convertToString(2112201, { locale: "en-US" })).to.equal(
      "two million one hundred twelve thousand two hundred one"
    );
    expect(convertToString(9090000, { locale: "en-US" })).to.equal(
      "nine million ninety thousand"
    );
    expect(convertToString(30000001, { locale: "en-US" })).to.equal(
      "thirty million one"
    );
    expect(convertToString(30000021, { locale: "en-US" })).to.equal(
      "thirty million twenty one"
    );
    expect(convertToString(40000205, { locale: "en-US" })).to.equal(
      "forty million two hundred five"
    );
    expect(convertToString(40302043, { locale: "en-US" })).to.equal(
      "forty million three hundred two thousand forty three"
    );
    expect(convertToString(201150634, { locale: "en-US" })).to.equal(
      "two hundred one million one hundred fifty thousand six hundred thirty four"
    );
    expect(convertToString(204050634, { locale: "en-US" })).to.equal(
      "two hundred four million fifty thousand six hundred thirty four"
    );
    expect(convertToString(2640951634, { locale: "en-US" })).to.equal(
      "two billion six hundred forty million nine hundred fifty one thousand six hundred thirty four"
    );
  });

  it("Check ordinal words config", () => {
    expect(convertToString(11601, { toOrdinalWords: true })).to.equal(
      "eleven thousand six hundred first"
    );
    expect(
      convertToString(51411, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("fifty one thousand four hundred eleventh");
    expect(convertToString(99999, { toOrdinalWords: true })).to.equal(
      "ninety nine thousand nine hundred ninety ninth"
    );
    expect(
      convertToString(100001, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand first");
    expect(convertToString(101010, { toOrdinalWords: true })).to.equal(
      "one lakh one thousand tenth"
    );
    expect(
      convertToString(100110, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand one hundred tenth");
    expect(convertToString(2112201, { toOrdinalWords: true })).to.equal(
      "twenty one lakh twelve thousand two hundred first"
    );
    expect(
      convertToString(9090000, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("nine million ninety thousandth");
    expect(convertToString(30000001, { toOrdinalWords: true })).to.equal(
      "three crore first"
    );
    expect(
      convertToString(30000021, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("thirty million twenty first");
    expect(convertToString(40000205, { toOrdinalWords: true })).to.equal(
      "four crore two hundred fifth"
    );
    expect(
      convertToString(40302043, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("forty million three hundred two thousand forty third");
    expect(convertToString(201150634, { toOrdinalWords: true })).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty fourth"
    );
    expect(
      convertToString(204050634, { locale: "en-US", toOrdinalWords: true })
    ).to.equal(
      "two hundred four million fifty thousand six hundred thirty fourth"
    );
    expect(convertToString(2640951634, { toOrdinalWords: true })).to.equal(
      "two arab sixty four crore nine lakh fifty one thousand six hundred thirty fourth"
    );
  });

  it("Check ordinal config", () => {
    expect(convertToString(11601, { toOrdinal: true })).to.equal("11601st");
    expect(convertToString(51411, { toOrdinal: true })).to.equal("51411th");
    expect(convertToString(99999, { toOrdinal: true })).to.equal("99999th");
    expect(convertToString(100001, { toOrdinal: true })).to.equal("100001st");
    expect(convertToString(101010, { toOrdinal: true })).to.equal("101010th");
    expect(convertToString(100110, { toOrdinal: true })).to.equal("100110th");
    expect(convertToString(2112201, { toOrdinal: true })).to.equal("2112201st");
    expect(convertToString(9090000, { toOrdinal: true })).to.equal("9090000th");
    expect(convertToString(30000001, { toOrdinal: true })).to.equal("30000001st");
    expect(convertToString(30000021, { toOrdinal: true })).to.equal("30000021st");
    expect(convertToString(40000205, { toOrdinal: true })).to.equal("40000205th");
    expect(convertToString(40302040, { toOrdinal: true })).to.equal("40302040th");
    expect(convertToString(201150634, { toOrdinal: true })).to.equal("201150634th");
    expect(convertToString(204050634, { toOrdinal: true })).to.equal("204050634th");
    expect(convertToString(2640951634, { toOrdinal: true })).to.equal(
      "2640951634th"
    );
  });

  it("Check change case config", () => {
    expect(convertToString(11601, { changeCaseTo: "lower" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(convertToString(51411, { changeCaseTo: "title" })).to.equal(
      "Fifty One Thousand Four Hundred Eleven"
    );
    expect(convertToString(99999, { changeCaseTo: "sentence" })).to.equal(
      "Ninety nine thousand nine hundred ninety nine"
    );
    expect(convertToString(100001, { changeCaseTo: "upper" })).to.equal(
      "ONE LAKH ONE"
    );
  });

  it("All checks combined", () => {
    expect(convertToString(755546)).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(convertToString(-755546)).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(convertToString(755546, { locale: "en-IN" })).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(convertToString(-755546, { locale: "en-IN" })).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(convertToString(755546, { locale: "en-US" })).to.equal(
      "seven hundred fifty five thousand five hundred forty six"
    );
    expect(convertToString(-755546, { locale: "en-US" })).to.equal(
      "minus seven hundred fifty five thousand five hundred forty six"
    );

    expect(
      convertToString(755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      convertToString(-755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(convertToString(755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "755546th"
    );
    expect(convertToString(-755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "-755546th"
    );

    expect(
      convertToString(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      convertToString(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(
      convertToString(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "title",
      })
    ).to.equal("Seven Lakh Fifty Five Thousand Five Hundred Forty Sixth");
    expect(
      convertToString(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "sentence",
      })
    ).to.equal("Minus seven lakh fifty five thousand five hundred forty sixth");
  });
});
