import { Router } from "express";
import combinations from "./combinations/combinations";
import predictions from "./predictions/predictions";

const allRoutes = Router();

allRoutes.get("/", (req, res) => {
  res.status(200).json({ msg: "API connected" });
});

allRoutes.use("/combinations", combinations);
allRoutes.use("/predictions", predictions);

export default allRoutes;
