import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Muaaz Abbasi Express Server Working");
});
export default app;
