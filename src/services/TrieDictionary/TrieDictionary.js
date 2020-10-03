import { parseDictionary } from "../../utils/dictionary/parseDictionary";
import Trie from "../Trie/Trie";

export default class TrieDictionary {
  constructor(textFilePath) {
    this.trie = new Trie();
    this.textFilePath = textFilePath;
  }

  populateTrie(words, parseFunction = parseDictionary) {
    const wordArray = words || parseFunction(this.textFilePath);

    wordArray.forEach((word) => {
      this.trie.insert(word);
    });
  }

  getAllPredictions(keyString) {
    if (!keyString) return [];
    return this.trie.getWordsAtNode(keyString);
  }
}
