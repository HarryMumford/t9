import { parseDictionary } from "./parseDictionary";

describe("parseDictionary", () => {
  it("returns an array of words", () => {
    const array = parseDictionary();

    expect(array.length).toBe(10_001);
  });
});
