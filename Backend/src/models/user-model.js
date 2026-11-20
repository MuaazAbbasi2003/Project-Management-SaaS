import mongoose, { Schema } from "mongoose";
// import bcrypt from "bcrypt";
import argon2 from "argon2";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";

const userSchema = new Schema(
  {
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://placehold.co/200x200`,
        localPath: "",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    forgotPasswordToken: {
      type: String,
      select: false,
    },
    forgotPasswordExpiry: {
      type: Date,
      select: false,
    },
    emailVerificationToken: {
      type: String,
      select: false,
    },
    emailVerificationExpiry: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

// this is hashing using becrypt
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await argon2.hash(this.password, { type: argon2.argon2id });
});

userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    return await argon2.verify(this.password, password);
  } catch (error) {
    return false;
  }
};

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.passwordHash;
    delete ret.__v;

    return ret;
  },
});
const User = mongoose.model("User", userSchema);

export default User;
