import { letterToKeyMapping } from "../utils/letterToKeyMapping";

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    if (word.length === 0) return;

    let currentNode = this.root;

    [...word].forEach((letter) => {
      const digit = letterToKeyMapping[letter];

      if (!currentNode.children) {
        currentNode.children = {};
      }

      if (!currentNode.children[digit]) {
        currentNode.children[digit] = {};
      }

      currentNode = currentNode.children[digit];
    });

    if (!currentNode.words) {
      currentNode.words = [];
    }

    currentNode.words.push(word);
  }
}

export default Trie;
