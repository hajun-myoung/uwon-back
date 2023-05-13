import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.url, "\t", req.method);
  res.send("Hello, uwon!");
});

export { app };
