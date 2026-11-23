import User from "../models/user-model.js";
import ApiError from "../utils/api-error.js";

const registerUser = async (data) => {
  try {
    const user = await User.create({
      email: data.email,
      password: data.password,
      username: data.username,
      isEmailVerified: false,
      fullName: data.fullName,
    });
    return {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
  } catch (error) {
    if (error.code === 11000) {
      const e = error.keyValue ?? error;
      if (e.email) {
        throw new ApiError(409, "Email already registered");
      }
      if (e.username) {
        throw new ApiError(409, "Username already taken");
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
};

export default registerUser;
