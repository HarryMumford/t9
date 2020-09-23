import { numberToLetterCombination } from "./numberToLetterCombination";

describe("numberToLetter", () => {
  it('returns [] when given ""', () => {
    const input = "";
    const assertion = numberToLetterCombination(input);
    const expectedResult = [];
    expect(assertion).toEqual(expectedResult);
  });

  it('returns ["a", "b", "c"] when given "2"', () => {
    const input = "2";
    const assertion = numberToLetterCombination(input);
    const expectedResult = ["a", "b", "c"];
    expect(assertion).toEqual(expectedResult);
  });

  it('returns ["0a", "0b", "0c"] when given "02"', () => {
    const input = "02";
    const assertion = numberToLetterCombination(input);
    const expectedResult = ["0a", "0b", "0c"];
    expect(assertion).toEqual(expectedResult);
  });

  it('returns ["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"] when given "27"', () => {
    const input = "27";
    const assertion = numberToLetterCombination(input);
    const expectedResult = [
      "ap",
      "aq",
      "ar",
      "as",
      "bp",
      "bq",
      "br",
      "bs",
      "cp",
      "cq",
      "cr",
      "cs",
    ];
    expect(assertion).toEqual(expectedResult);
  });
});
