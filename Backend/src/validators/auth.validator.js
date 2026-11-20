import { email, optional, z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .optional()
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name cannot exceed 50 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .toLowerCase()
      .email("Please provide a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password cannot exceed 128 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "Password must contain at least one letter and one number",
      ),
    username: z
      .string()
      .trim()
      .min(1, "Username is required")
      .toLowerCase()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username cannot exceed 30 characters"),
  })
  .strict();
