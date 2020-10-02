import { Router } from "express";
import { parseDictionary } from "../../utils/dictionary/parseDictionary";
import Predictor from "../../services/Predictor";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const keyString = req.body.keyString;
    const array = parseDictionary();
    const predictorInstance = new Predictor();

    predictorInstance.populateTrie(array);

    const predictions = await predictorInstance.getAllPredictions(keyString);

    res.json({ predictions });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
