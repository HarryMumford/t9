import Trie from "./Trie";

const words = ["hello", "helicopter", "cab", "cat", "eat", "fat"];

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
    return "a";
  }
}
