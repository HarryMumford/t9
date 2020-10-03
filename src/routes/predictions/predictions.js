import { Router } from "express";
import { parseDictionary } from "../../utils/dictionary/parseDictionary";
import TrieDictionary from "../../services/TrieDictionary/TrieDictionary";

const router = Router();

const trieDictionaryInstance = new TrieDictionary();
const array = parseDictionary();
trieDictionaryInstance.populateTrie(array);

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
