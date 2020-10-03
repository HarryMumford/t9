import Trie from "../Trie/Trie";

export default class TrieDictionary {
  constructor() {
    this.trie = new Trie();
  }

  populateTrie(words) {
    words.forEach((word) => {
      this.trie.insert(word);
    });
  }

  getAllPredictions(keyString) {
    if (!keyString) return [];
    return this.trie.getWordsAtNode(keyString);
  }
}
