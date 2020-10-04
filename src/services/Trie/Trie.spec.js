import Trie from "./Trie";

describe("Trie", () => {
  describe(".insert", () => {
    it("throws error when given empty string", () => {
      const trieInstance = new Trie();
      const input = "";

      const assert = () => {
        trieInstance.insert(input);
      };

      expect(() => {
        assert();
      }).toThrow();
    });

    it("throws error when given non [a-z] values", () => {
      const trieInstance = new Trie();
      const input = "R";

      const assert = () => {
        trieInstance.insert(input);
      };

      expect(() => {
        assert();
      }).toThrow();
    });

    it("creates 1 node and stores the given word, 'a'", () => {
      const trieInstance = new Trie();
      const input = "a";

      trieInstance.insert(input);
      const assertion = trieInstance.root.children[2];
      const expectedResult = { words: ["a"] };
      expect(assertion).toMatchObject(expectedResult);
    });

    it("creates 2 nodes with keys '2' and '4' when given words, 'a' and 'i'", () => {
      const trieInstance = new Trie();
      const input1 = "i";
      const input2 = "a";

      trieInstance.insert(input1);
      trieInstance.insert(input2);

      const childrenKeys = Object.keys(trieInstance.root.children);

      expect(childrenKeys).toMatchObject(["2", "4"]);
    });

    it("creates 3 nodes and stores given word, 'ace'", () => {
      const trieInstance = new Trie();
      const input = "ace";

      trieInstance.insert(input);
      const endNode = trieInstance.root.children[2].children[2].children[3];

      const expectedEndNode = { words: ["ace"] };
      expect(endNode).toMatchObject(expectedEndNode);
    });

    it("creates 3 nodes and stores both T9onyms in same node", () => {
      const trieInstance = new Trie();
      const input1 = "fat";
      const input2 = "eat";

      trieInstance.insert(input1);
      trieInstance.insert(input2);

      const previousNode = trieInstance.root.children[3].children[2];
      const endNode = trieInstance.root.children[3].children[2].children[8];

      const expectedEndNode = { words: ["fat", "eat"] };
      const expectedPreviousNode = { children: {} };

      expect(endNode).toMatchObject(expectedEndNode);
      expect(previousNode).toMatchObject(expectedPreviousNode);
    });
  });

  describe(".getWordsAtNode", () => {
    it("retrieves 'eat' and 'fat' (T9onyms) given 328", () => {
      const trieInstance = new Trie();
      const input = "328";

      const word1 = "fat";
      const word2 = "eat";

      trieInstance.insert(word1);
      trieInstance.insert(word2);

      const assertion = trieInstance.getWordsAtNode(input);
      const expectedResult = ["fat", "eat"];
      expect(assertion).toMatchObject(expectedResult);
    });
    it("returns empty array if no words at node or node does not exist", () => {
      const trieInstance = new Trie();
      const input1 = "2";
      const input2 = "3";

      const word = "fat";

      trieInstance.insert(word);

      const nonExistentNode = trieInstance.getWordsAtNode(input1);
      const noWordNode = trieInstance.getWordsAtNode(input2);
      const expectedResult = [];

      expect(nonExistentNode).toEqual(expectedResult);
      expect(noWordNode).toEqual(expectedResult);
    });
  });
});
