import { Spark } from "../db/index.js";

import { v4 as UUIDv4 } from "uuid";

class sparkHandle {
  static async addSpark({
    categoryId,
    title,
    summarize,
    capacity,
    prize,
    description,
    authorId,
    createdAt,
  }) {
    const newUUID = UUIDv4();
    console.log("new UUID : ", newUUID);

    const NEW_SPARK = {
      uid: newUUID,
      categoryId,
      title,
      summarize,
      capacity,
      prize,
      description,
      authorId,
      createdAt,
    };
    const SPARK = await Spark.create({ NEW_SPARK });
    if (!SPARK) return false;
    return true;
  }
}

export { sparkHandle };
