import { Router } from "express";
import { registerSchema } from "../validators/auth.validator.js";
import validate from "../middelware/validate.middelware.js";
import registerUserController from "../controllers/register.user.controller.js";
import registerLimiter from "../middelware/rate-limiter.js";
const regRouter = Router();

regRouter
  .route("/register")
  .post(registerLimiter, validate(registerSchema), registerUserController);

export default regRouter;
