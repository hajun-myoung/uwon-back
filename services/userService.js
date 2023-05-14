import { User } from "../db/index.js";

import bcrypt from "bcrypt";
import { v4 as UUIDv4 } from "uuid";
import jwt from "jsonwebtoken";

class userAuth {
  static async checkId({ id }) {
    const USER = await User.findById({ id });
    if (!USER) return false;
    else return true;
  }
  static async addUser({ uid, name, rating = 500, id, password, pthotoURL }) {
    const ID = await User.findById({ id });
    if (ID) {
      console.log("Already Using Id");
      return { error: "duplicated id" };
    }

    if (password) {
      const HASHED_PW = await bcrypt(password, 10);
      const NEW_USER = {
        uid,
        rating,
        id,
        HASHED_PW,
        name,
        pthotoURL,
      };

      const CREATED_USER = await User.create(NEW_USER);
      return CREATED_USER;
    } else {
      return { error: "no password" };
    }
  }

  static async getUserByIdPassword({ id, password }) {
    const USER = await User.findById({ id });
    if (!USER) return { error: "no user" };

    const SAVED_PW = USER.password;
    const IS_CORRECT = await bcrypt.compare(password, SAVED_PW);

    if (!IS_CORRECT) return { error: "incorrect password" };

    const SECRETE_KEY = process.env.JWT_SECRET_KEY || "JWT_TMP_KEY";
    const TOKEN = jwt.sign({ id }, SECRETE_KEY);

    const SIGNED_INFO = {
      TOKEN,
      uid: USER.uid,
      name: USER.name,
      rating: USER.rating,
      id: USER.id,
      pthotourl: USER.photoUrl,
    };

    return SIGNED_INFO;
  }
}
