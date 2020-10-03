import { Router } from "express";
import { parseDictionary } from "../../utils/dictionary/parseDictionary";
import Predictor from "../../services/Predictor";

const router = Router();

const predictorInstance = new Predictor();
const array = parseDictionary();
predictorInstance.populateTrie(array);

router.post("/", async (req, res) => {
  try {
    const keyString = req.body.keyString;
    const predictions = await predictorInstance.getAllPredictions(keyString);

    res.json({ predictions });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
