import TrieDictionary from "./TrieDictionary";
import Trie from "../Trie/Trie";
jest.mock("../Trie/Trie");

beforeEach(() => {
  Trie.mockClear();
});

describe("TrieDictionary", () => {
  describe(".populateTrie", () => {
    it("calls the insert method on the Trie class 3 times given an array of 3 words", () => {
      const predictionInstance = new TrieDictionary();
      const words = ["ace", "eat", "fat"];

      const mockTrieInstance = Trie.mock.instances[0];
      const mockInsert = mockTrieInstance.insert;

      predictionInstance.populateTrie(words);

      expect(mockInsert).toHaveBeenCalledWith("ace");
      expect(mockInsert).toHaveBeenCalledWith("eat");
      expect(mockInsert).toHaveBeenCalledWith("fat");
      expect(mockInsert).toHaveBeenCalledTimes(3);
    });

    it("calls the parseDictionary", () => {
      const predictionInstance = new TrieDictionary();
      const words = ["ace", "eat", "fat"];

      const mockParseFunction = jest.fn(() => words);

      predictionInstance.populateTrie(undefined, mockParseFunction);

      expect(mockParseFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe(".getAllPredictions", () => {
    it("returns real word predictions given an numerical string", () => {
      const predictionInstance = new TrieDictionary();
      const input = "328";

      const mockTrieInstance = Trie.mock.instances[0];
      const mockGetWordsAtNode = mockTrieInstance.getWordsAtNode;

      predictionInstance.getAllPredictions(input);

      expect(mockGetWordsAtNode).toHaveBeenCalledWith("328");
      expect(mockGetWordsAtNode).toHaveBeenCalledTimes(1);
    });

    it("returns empty array when given undefined", () => {
      const predictionInstance = new TrieDictionary();
      const input = undefined;

      const assertion = predictionInstance.getAllPredictions(input);
      const expectedResult = [];

      expect(assertion).toEqual(expectedResult);
    });
  });
});
