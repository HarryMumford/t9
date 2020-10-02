import Trie from "./Trie";

export default class Predictor {
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
