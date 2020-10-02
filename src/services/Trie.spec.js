import Trie from "./Trie";

describe("Trie", () => {
  describe(".insert", () => {
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
      const assertion = trieInstance.root.children[2].children[2].children[3];
      const expectedResult = { words: ["ace"] };
      expect(assertion).toMatchObject(expectedResult);
    });

    it("creates 3 nodes and stores both T9onyms in same node", () => {
      const trieInstance = new Trie();
      const input1 = "fat";
      const input2 = "eat";

      trieInstance.insert(input1);
      trieInstance.insert(input2);

      const assertion = trieInstance.root.children[3].children[2].children[8];
      const expectedResult = { words: ["fat", "eat"] };

      expect(assertion).toMatchObject(expectedResult);
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
  });
});
