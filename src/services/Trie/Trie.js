import letterToKeyMapping from "../../utils/letterToKeyMapping";

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    if (word.length === 0) throw new Error("Word length cannot be zero");

    let currentNode = this.root;

    [...word].forEach((letter, index) => {
      const digit = letterToKeyMapping[letter];
      let isLastNode = false;

      if (word.length === index + 1) {
        isLastNode = true;
      }

      if (!digit) throw new Error("Not a valid digit");

      if (!currentNode.children) {
        currentNode.children = {};
      }

      if (!currentNode.children[digit]) {
        currentNode.children[digit] = {};
      }

      currentNode = currentNode.children[digit];

      if (!currentNode.deepSuggestions) {
        currentNode.deepSuggestions = [];
      }

      if (!isLastNode) {
        currentNode.deepSuggestions.push(word);
      }
    });

    if (!currentNode.currentSuggestions) {
      currentNode.currentSuggestions = [];
    }

    currentNode.currentSuggestions.push(word);
  }

  getWordsAtNode(keyString) {
    let currentNode = this.root;

    [...keyString].forEach((nodeKey) => {
      if (!currentNode.children[nodeKey]) return;

      currentNode = currentNode.children[nodeKey];
    });

    return currentNode.currentSuggestions || [];
  }
}

export default Trie;
