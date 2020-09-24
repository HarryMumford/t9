import { Router } from "express";
import combinations from "./combinations/combinations";

const allRoutes = Router();

allRoutes.get("/", (req, res) => {
  res.status(200).json({ msg: "API connected" });
});

allRoutes.use("/combinations", combinations);

export default allRoutes;
