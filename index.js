import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config();
console.log(process.env.SERVER_PORT);

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING NOW : http://localhost:${PORT}/`);
});
