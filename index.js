import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config();
console.log(process.env.SERVER_PORT);

const PORT = process.env.SERVER_PORT || 8000;
const IP = process.env.SERVER_IP || "localhost";

app.listen(PORT, IP, () => {
  console.log(`SERVER IS WORKING NOW : http://localhost:${PORT}/`);
  console.log(`LOCAL ACCESS AVAILABLE ON : http://${IP}:${PORT}/`);
});
