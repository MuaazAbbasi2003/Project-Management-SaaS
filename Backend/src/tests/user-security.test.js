import User from "./models/user-model.js";
import dbConnection from "./db/db-connection.js";

const testUserSecurity = async () => {
  try {
    await dbConnection();

    const user = await User.findOne({
      email: "testuser01@example.com",
    }).select("+password +refreshToken");

    if (!user) {
      console.log("User not found");
      return;
    }

    console.log(user.toJSON());
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

testUserSecurity();
