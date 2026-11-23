import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";
import registerUser from "../services/auth.service.js";

const registerUserController = asyncHandler(async (req, res) => {
  const createdUser = await registerUser(req.body);
  return res
    .status(201)
    .json(
      new ApiResponse(201, "User Registered Sucess!", { user: createdUser }),
    );
});

export default registerUserController;
