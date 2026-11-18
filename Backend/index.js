import app from "./src/app.js";
import dotenv from "dotenv";
import dbConnection from "./src/db/db-connection.js";

dotenv.config({
  path: "./src/.env",
});

const port = process.env.PORT_NUMBER || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
dbConnection();
