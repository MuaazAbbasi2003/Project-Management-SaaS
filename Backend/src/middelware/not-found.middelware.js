import ApiError from "../utils/api-error.js";
const notFound = (req, res, next) => {
  const error = new ApiError(404, "Route not found");

  return next(error);
};

export default notFound;
