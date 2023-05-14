import cors from "cors";
import express from "express";

import { sparkRouter } from "../routers/sparkRouter.js";
import { userRouter } from "../routers/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.url, "\t", req.method);
  res.send("Hello, uwon!");
});

app.use(sparkRouter);
app.use(userRouter);

export { app };
