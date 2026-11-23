import { rateLimit } from "express-rate-limit";
import ApiError from "../utils/api-error.js";

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (req, res, next) => {
    const error = new ApiError(
      429,
      "Too many registration attempts. Please try again later.",
    );
    next(error);
  },
  message: "Too many registration attempts. Please try again later.",
});

export default registerLimiter;
