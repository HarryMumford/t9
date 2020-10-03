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
    const filePath = this.textFilePath;
    const encoding = {
      encoding: "utf8",
    };
    const data = fs.readFileSync(filePath, encoding);
    const regex = /\r?\n/;
    const array = data.toString().split(regex);

    return array;
  }

  getAllPredictions(keyString) {
    if (!keyString) return [];
    return this.trie.getWordsAtNode(keyString);
  }
}
