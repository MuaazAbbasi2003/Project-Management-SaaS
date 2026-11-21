import { Router } from "express";
import { registerSchema } from "../validators/auth.validator.js";
import validate from "../middelware/validate.middelware.js";

const regRouter = Router();

regRouter.route("/register").post(
  validate(registerSchema),
  registerUser
);

export default regRouter;