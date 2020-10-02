import Predictor from "./Predictor";
import Trie from "./Trie";
jest.mock("./Trie");

beforeEach(() => {
  Trie.mockClear();
});

describe("Prediction", () => {
  describe(".populateTrie", () => {
    it("calls the insert method on the Trie class 5 times given an array of 5 words", () => {
      const predictionInstance = new Predictor();
      const words = ["ace", "eat", "fat"];

      predictionInstance.populateTrie(words);

      const mockTrieInstance = Trie.mock.instances[0];
      const mockInsert = mockTrieInstance.insert;

      expect(mockInsert).toHaveBeenCalledWith("ace");
      expect(mockInsert).toHaveBeenCalledWith("eat");
      expect(mockInsert).toHaveBeenCalledWith("fat");
      expect(mockInsert).toHaveBeenCalledTimes(3);
    });
  });

  describe(".getAllPredictions", () => {
    it("returns real word predictions given an numerical string", () => {
      const predictionInstance = new Predictor();
      const input = "2";
      const assertion = predictionInstance.getAllPredictions(input);
      const expectedResult = "a";
      expect(assertion).toBe(expectedResult);
    });
  });
});
