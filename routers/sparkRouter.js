import is from "@sindresorhus/is";
import { Router } from "express";
import { sparkHandle } from "../services/sparkService.js";

const sparkRouter = Router();

sparkRouter.post("/spark/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("Invalid body data");
    }
    const {
      categoryId,
      title,
      summarize,
      capacity,
      prize,
      description,
      authorId,
    } = req.body;
    const date = new Date();

    console.log("Trying to Create New Spark");

    const newSpark = await sparkHandle.addSpark({
      categoryId,
      title,
      summarize,
      capacity,
      prize,
      description,
      authorId,
      createdAt: date,
    });

    res.status(200).send("new spark has been added");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

sparkRouter.get("/spark/", async function (req, res, next) {
  try {
    const sparks = await sparkHandle.getAll();
    res.status(200).send(sparks);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

export { sparkRouter };
