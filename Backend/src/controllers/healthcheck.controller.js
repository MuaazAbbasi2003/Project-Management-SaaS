import asyncHandler from "../utils/async-handler.js";
import ApiResponse from "../utils/api-response.js";
const healthCheckController = asyncHandler(async (req, res) => {
  res
    .status(200)
    .send(new ApiResponse(200, { message: " success in running the server" }));
});

export default healthCheckController;
