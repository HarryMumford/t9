import { parseDictionary } from "../../utils/dictionary/parseDictionary";
import Trie from "../Trie/Trie";
import fs from "fs";

export default class TrieDictionary {
  constructor(textFilePath) {
    this.trie = new Trie();
    this.textFilePath = textFilePath;
  }

  populateTrie(words) {
    const wordArray = words || this.parseDictionary();

    wordArray.forEach((word) => {
      this.trie.insert(word);
    });
  }

  parseDictionary() {
    const data = fs.readFileSync(this.textFilePath, {
      encoding: "utf8",
    });
    const array = data.toString().split("\n");

    return array;
  }

  getAllPredictions(keyString) {
    if (!keyString) return [];
    return this.trie.getWordsAtNode(keyString);
  }
}
