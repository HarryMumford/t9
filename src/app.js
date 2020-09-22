import express from "express";
import cors from "cors";
import { json } from "body-parser";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(json());

export default app;
