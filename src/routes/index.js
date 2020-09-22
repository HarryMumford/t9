import { Router } from "express";
import prediction from "./prediction";

const allRoutes = Router();

allRoutes.get("/", (req, res) => {
  res.status(200).json({ msg: "API connected" });
});

allRoutes.use("/prediction", prediction);

export default allRoutes;
