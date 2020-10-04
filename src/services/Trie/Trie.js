import letterToKeyMapping from "../../utils/letterToKeyMapping";

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    if (word.length === 0) throw new Error("Word length cannot be zero");

    let currentNode = this.root;

    [...word].forEach((letter) => {
      const digit = letterToKeyMapping[letter];

      if (!digit) throw new Error("Not a valid digit");

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
      if (!currentNode.children[nodeKey]) return;

      currentNode = currentNode.children[nodeKey];
    });

    return currentNode.words || [];
  }
}

export default Trie;
