import ApiError from "../utils/api-error.js";
import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";
import User from "../models/user-model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  const doesUserExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (doesUserExist) {
    throw new ApiError(409, "User Already Exists Kindly Login!");
  }

  const user = await User.create({
    email,
    password,
    username,
    isEmailVerified: false,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  if (!createdUser) {
    throw new ApiError(500, " There Was a Problem in Creating the User ");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User Registered Successfully and verification email has been sent on your email",
      ),
    );
});

export default registerUser;
