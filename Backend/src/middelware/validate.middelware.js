import ApiError from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";

const validate = (schema) => {
  return asyncHandler((req, res, next) => {
    const result = schema.safeParse(req.body);

    //Instead of exposing the entire Zod issue object, we only send the field and its message. This also ensures we don't accidentally include submitted input values, such as passwords, in validation errors
    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      throw new ApiError(400, "Validation failed", errors);
    }

    req.body = result.data;
    next();
  });
};

export default validate;
