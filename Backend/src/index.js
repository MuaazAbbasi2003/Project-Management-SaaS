import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./db/db-connection.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT_NUMBER;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
dbConnection();
