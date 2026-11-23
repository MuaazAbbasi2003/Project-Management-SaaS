import express from "express";
import router from "./routes/healthCheck-Route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import regRouter from "./routes/auth.route.js";
import errorHandler from "./middelware/error-handler.js";
import notFound from "./middelware/not-found.middelware.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Muaaz Abbasi Express Server Working");
});

// basic configuration
app.use(express.json({ limit: "16Kb" }));
app.use(express.urlencoded({ extended: true, limit: "16Kb" }));
app.use(express.static("public"));

app.use(cookieParser());
app.use(helmet());
//Cors Cofigurationn
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

app.use("/api/v1/healthcheck", router);
app.use("/api/v1/auth", regRouter);

app.use(notFound);
app.use(errorHandler);
export default app;
