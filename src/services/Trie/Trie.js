import letterToKeyMapping from "../../utils/letterToKeyMapping";

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    if (word.length === 0) return;

    let currentNode = this.root;

    [...word].forEach((letter) => {
      const digit = letterToKeyMapping[letter];

      if (!digit) return;

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

  getWordsAtNode(keyString) {
    let currentNode = this.root;

    [...keyString].forEach((nodeKey) => {
      if (!currentNode.children[nodeKey]) return [];

      currentNode = currentNode.children[nodeKey];

      return currentNode;
    });

    return currentNode.words;
  }
}

export default Trie;
