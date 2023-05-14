import is from "@sindresorhus/is";
import { Router } from "express";
import { userAuth } from "../services/userService.js";

const userRouter = Router();

userRouter.post("/user/signup", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");
    const { name, rating, id, password, passwordConfirm, photoUrl } = req.body;

    if (password !== passwordConfirm)
      throw new Error("password confirmation failed");

    const NEWUSER = await userAuth.addUser({
      name,
      rating,
      id,
      password,
      photoUrl,
    });
    if (NEWUSER.error) {
      if (NEWUSER.error == "duplicated id")
        res.status(305).send("duplicated ID");
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});

userRouter.post("/user/signin", async function (req, res, next) {
  try {
    const { id, password } = req.body;
    const USER = await userAuth.getUserByIdPassword({ id, password });
    if (USER.error) {
      console.log(USER.error);
      if (USER.error == "no userid") res.status(305).send("incorrect id");
      else if (USER.error == "incorrect password")
        res.status(305).send("incorrect pw");
    }
    res.status(200).send(USER);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});

export { userRouter };
