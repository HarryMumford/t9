import Predictor from "./services/Predictor";
import { parseDictionary } from "./utils/dictionary/parseDictionary";

it.only("populates trie with dictionary", () => {
  const p = new Predictor();

  const array = parseDictionary();

  p.populateTrie(array);

  console.log(
    p.trie.root.children[7].children[8].children[7].children[3].children[7]
      .children[2]
  );
});
