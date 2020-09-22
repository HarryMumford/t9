import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json({ msg: "test" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
