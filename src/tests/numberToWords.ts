import { expect } from "chai";
import { numberToString } from "../index";

describe("Convert number to word test cases", () => {
  it("Check number is desired range", () => {
    expect(() => numberToString(100000000001)).to.Throw(
      Error,
      "Number should be in range of -100000000000 to 100000000000"
    );
  });

  it("Convert positive number in the range", () => {
    expect(numberToString(1)).to.equal("one");
    expect(numberToString(9)).to.equal("nine");
    expect(numberToString(10)).to.equal("ten");
    expect(numberToString(12)).to.equal("twelve");
    expect(numberToString(19)).to.equal("nineteen");
    expect(numberToString(30)).to.equal("thirty");
    expect(numberToString(45)).to.equal("forty five");
    expect(numberToString(78)).to.equal("seventy eight");
    expect(numberToString(78)).to.equal("seventy eight");
    expect(numberToString(99)).to.equal("ninety nine");
    expect(numberToString(105)).to.equal("one hundred five");
    expect(numberToString(117)).to.equal("one hundred seventeen");
    expect(numberToString(555)).to.equal("five hundred fifty five");
    expect(numberToString(600)).to.equal("six hundred");
    expect(numberToString(789)).to.equal("seven hundred eighty nine");
    expect(numberToString(1111)).to.equal("one thousand one hundred eleven");
    expect(numberToString(1438)).to.equal(
      "one thousand four hundred thirty eight"
    );
    expect(numberToString(5666)).to.equal("five thousand six hundred sixty six");
    expect(numberToString(8000)).to.equal("eight thousand");
    expect(numberToString(10000)).to.equal("ten thousand");
    expect(numberToString(11001)).to.equal("eleven thousand one");
    expect(numberToString(11051)).to.equal("eleven thousand fifty one");
    expect(numberToString(11601)).to.equal("eleven thousand six hundred one");
    expect(numberToString(51411)).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(numberToString(99999)).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(numberToString(100001)).to.equal("one lakh one");
    expect(numberToString(101010)).to.equal("one lakh one thousand ten");
    expect(numberToString(100110)).to.equal("one lakh one hundred ten");
    expect(numberToString(2112201)).to.equal(
      "twenty one lakh twelve thousand two hundred one"
    );
    expect(numberToString(9090000)).to.equal("ninety lakh ninety thousand");
    expect(numberToString(30000001)).to.equal("three crore one");
    expect(numberToString(30000021)).to.equal("three crore twenty one");
    expect(numberToString(40000205)).to.equal("four crore two hundred five");
    expect(numberToString(40302043)).to.equal(
      "four crore three lakh two thousand forty three"
    );
    expect(numberToString(201150634)).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty four"
    );
    expect(numberToString(204050634)).to.equal(
      "twenty crore forty lakh fifty thousand six hundred thirty four"
    );
    expect(numberToString(204750634)).to.equal(
      "twenty crore forty seven lakh fifty thousand six hundred thirty four"
    );
    expect(numberToString(264951634)).to.equal(
      "twenty six crore forty nine lakh fifty one thousand six hundred thirty four"
    );
  });

  it("Check negative number in the range", () => {
    expect(numberToString(-10000)).to.equal("minus ten thousand");
    expect(numberToString(-100001)).to.equal("minus one lakh one");
    expect(numberToString(-101010)).to.equal("minus one lakh one thousand ten");
    expect(numberToString(-100110)).to.equal("minus one lakh one hundred ten");
    expect(numberToString(-2112201)).to.equal(
      "minus twenty one lakh twelve thousand two hundred one"
    );
    expect(numberToString(-9090000)).to.equal("minus ninety lakh ninety thousand");
    expect(numberToString(-30000001)).to.equal("minus three crore one");
    expect(numberToString(-30000021)).to.equal("minus three crore twenty one");
    expect(numberToString(-40000205)).to.equal(
      "minus four crore two hundred five"
    );
    expect(numberToString(-40302043)).to.equal(
      "minus four crore three lakh two thousand forty three"
    );
  });

  it("Check locale config", () => {
    expect(numberToString(11601, { locale: "en-US" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(numberToString(51411, { locale: "en-US" })).to.equal(
      "fifty one thousand four hundred eleven"
    );
    expect(numberToString(99999, { locale: "en-US" })).to.equal(
      "ninety nine thousand nine hundred ninety nine"
    );
    expect(numberToString(100001, { locale: "en-US" })).to.equal(
      "one hundred thousand one"
    );
    expect(numberToString(101010, { locale: "en-US" })).to.equal(
      "one hundred one thousand ten"
    );
    expect(numberToString(100110, { locale: "en-US" })).to.equal(
      "one hundred thousand one hundred ten"
    );
    expect(numberToString(2112201, { locale: "en-US" })).to.equal(
      "two million one hundred twelve thousand two hundred one"
    );
    expect(numberToString(9090000, { locale: "en-US" })).to.equal(
      "nine million ninety thousand"
    );
    expect(numberToString(30000001, { locale: "en-US" })).to.equal(
      "thirty million one"
    );
    expect(numberToString(30000021, { locale: "en-US" })).to.equal(
      "thirty million twenty one"
    );
    expect(numberToString(40000205, { locale: "en-US" })).to.equal(
      "forty million two hundred five"
    );
    expect(numberToString(40302043, { locale: "en-US" })).to.equal(
      "forty million three hundred two thousand forty three"
    );
    expect(numberToString(201150634, { locale: "en-US" })).to.equal(
      "two hundred one million one hundred fifty thousand six hundred thirty four"
    );
    expect(numberToString(204050634, { locale: "en-US" })).to.equal(
      "two hundred four million fifty thousand six hundred thirty four"
    );
    expect(numberToString(2640951634, { locale: "en-US" })).to.equal(
      "two billion six hundred forty million nine hundred fifty one thousand six hundred thirty four"
    );
  });

  it("Check ordinal words config", () => {
    expect(numberToString(11601, { toOrdinalWords: true })).to.equal(
      "eleven thousand six hundred first"
    );
    expect(
      numberToString(51411, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("fifty one thousand four hundred eleventh");
    expect(numberToString(99999, { toOrdinalWords: true })).to.equal(
      "ninety nine thousand nine hundred ninety ninth"
    );
    expect(
      numberToString(100001, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand first");
    expect(numberToString(101010, { toOrdinalWords: true })).to.equal(
      "one lakh one thousand tenth"
    );
    expect(
      numberToString(100110, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("one hundred thousand one hundred tenth");
    expect(numberToString(2112201, { toOrdinalWords: true })).to.equal(
      "twenty one lakh twelve thousand two hundred first"
    );
    expect(
      numberToString(9090000, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("nine million ninety thousandth");
    expect(numberToString(30000001, { toOrdinalWords: true })).to.equal(
      "three crore first"
    );
    expect(
      numberToString(30000021, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("thirty million twenty first");
    expect(numberToString(40000205, { toOrdinalWords: true })).to.equal(
      "four crore two hundred fifth"
    );
    expect(
      numberToString(40302043, { locale: "en-US", toOrdinalWords: true })
    ).to.equal("forty million three hundred two thousand forty third");
    expect(numberToString(201150634, { toOrdinalWords: true })).to.equal(
      "twenty crore eleven lakh fifty thousand six hundred thirty fourth"
    );
    expect(
      numberToString(204050634, { locale: "en-US", toOrdinalWords: true })
    ).to.equal(
      "two hundred four million fifty thousand six hundred thirty fourth"
    );
    expect(numberToString(2640951634, { toOrdinalWords: true })).to.equal(
      "two arab sixty four crore nine lakh fifty one thousand six hundred thirty fourth"
    );
  });

  it("Check ordinal config", () => {
    expect(numberToString(11601, { toOrdinal: true })).to.equal("11601st");
    expect(numberToString(51411, { toOrdinal: true })).to.equal("51411th");
    expect(numberToString(99999, { toOrdinal: true })).to.equal("99999th");
    expect(numberToString(100001, { toOrdinal: true })).to.equal("100001st");
    expect(numberToString(101010, { toOrdinal: true })).to.equal("101010th");
    expect(numberToString(100110, { toOrdinal: true })).to.equal("100110th");
    expect(numberToString(2112201, { toOrdinal: true })).to.equal("2112201st");
    expect(numberToString(9090000, { toOrdinal: true })).to.equal("9090000th");
    expect(numberToString(30000001, { toOrdinal: true })).to.equal("30000001st");
    expect(numberToString(30000021, { toOrdinal: true })).to.equal("30000021st");
    expect(numberToString(40000205, { toOrdinal: true })).to.equal("40000205th");
    expect(numberToString(40302040, { toOrdinal: true })).to.equal("40302040th");
    expect(numberToString(201150634, { toOrdinal: true })).to.equal("201150634th");
    expect(numberToString(204050634, { toOrdinal: true })).to.equal("204050634th");
    expect(numberToString(2640951634, { toOrdinal: true })).to.equal(
      "2640951634th"
    );
  });

  it("Check change case config", () => {
    expect(numberToString(11601, { changeCaseTo: "lower" })).to.equal(
      "eleven thousand six hundred one"
    );
    expect(numberToString(51411, { changeCaseTo: "title" })).to.equal(
      "Fifty One Thousand Four Hundred Eleven"
    );
    expect(numberToString(99999, { changeCaseTo: "sentence" })).to.equal(
      "Ninety nine thousand nine hundred ninety nine"
    );
    expect(numberToString(100001, { changeCaseTo: "upper" })).to.equal(
      "ONE LAKH ONE"
    );
  });

  it("All checks combined", () => {
    expect(numberToString(755546)).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(numberToString(-755546)).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(numberToString(755546, { locale: "en-IN" })).to.equal(
      "seven lakh fifty five thousand five hundred forty six"
    );
    expect(numberToString(-755546, { locale: "en-IN" })).to.equal(
      "minus seven lakh fifty five thousand five hundred forty six"
    );

    expect(numberToString(755546, { locale: "en-US" })).to.equal(
      "seven hundred fifty five thousand five hundred forty six"
    );
    expect(numberToString(-755546, { locale: "en-US" })).to.equal(
      "minus seven hundred fifty five thousand five hundred forty six"
    );

    expect(
      numberToString(755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      numberToString(-755546, { locale: "en-IN", toOrdinalWords: true })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(numberToString(755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "755546th"
    );
    expect(numberToString(-755546, { locale: "en-IN", toOrdinal: true })).to.equal(
      "-755546th"
    );

    expect(
      numberToString(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("seven lakh fifty five thousand five hundred forty sixth");
    expect(
      numberToString(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        toOrdinal: true,
      })
    ).to.equal("minus seven lakh fifty five thousand five hundred forty sixth");

    expect(
      numberToString(755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "title",
      })
    ).to.equal("Seven Lakh Fifty Five Thousand Five Hundred Forty Sixth");
    expect(
      numberToString(-755546, {
        locale: "en-IN",
        toOrdinalWords: true,
        changeCaseTo: "sentence",
      })
    ).to.equal("Minus seven lakh fifty five thousand five hundred forty sixth");
  });
});
