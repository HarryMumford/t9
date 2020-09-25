import { Router } from "express";
import { numberToLetterCombination } from "../../services/numberToLetterCombination";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const number = req.query.number;
    const combinations = await numberToLetterCombination(number);
    res.json({ combinations });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;