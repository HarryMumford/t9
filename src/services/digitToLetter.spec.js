import { digitToLetter } from "./digitToLetter";

describe("digitToLetter", () => {
  it('returns ["a", "b", "c"] when given "2"', () => {
    const input = "2";
    const assertion = digitToLetter(input);
    const expectedResult = ["a", "b", "c"];
    expect(assertion).toEqual(expectedResult);
  });
});
