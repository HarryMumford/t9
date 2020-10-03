import numberToLetterCombination from "./numberToLetterCombination";

describe("numberToLetter", () => {
  it("returns empty array when given empty string", () => {
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

  it("returns 108 combinations when given 2227", () => {
    const input = "2227";
    const assertionLength = numberToLetterCombination(input).length;
    const expectedResult = 108;
    expect(assertionLength).toEqual(expectedResult);
  });
});
