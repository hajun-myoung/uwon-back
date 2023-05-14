import mongoose from "mongoose";
import dotenv from "dotenv";

import { Spark } from "./models/Spark.js";
import { User } from "./models/User.js";

dotenv.config();
console.log(process.env.MONGODB_URL);

const DBURL =
  process.env.MONGODB_URL ||
  "Error : No MongoDB URL. Set it up at dotenv please";
mongoose.connect(DBURL);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("CONNECTED TO MONGODB : ", DBURL);
});

db.on("error", (err) => {
  console.log("Error : Failed to Connect - ", DBURL);
  console.log(err);
});

export { Spark, User };
