import { Router } from "express";
import TrieDictionary from "../../services/TrieDictionary/TrieDictionary";

const router = Router();
const dictionaryFilePath = "src/utils/dictionary/plain-eng-400-000.txt";
const trieDictionaryInstance = new TrieDictionary(dictionaryFilePath);
trieDictionaryInstance.populateTrie();

router.post("/", async (req, res) => {
  try {
    const keyString = req.body.keyString;
    const predictions = await trieDictionaryInstance.getAllPredictions(
      keyString
    );

    res.json({ predictions });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
