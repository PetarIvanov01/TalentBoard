"use server";

import { z } from "zod";

export async function registerEmployeeAction(prevState: any, formData: FormData) {
  // Define the schema with improved validations
  const RegisterSchema = z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  });

  const { firstName, lastName, email, password, confirmPassword } =
    Object.fromEntries(formData.entries());

  const validate = RegisterSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });

  // Simulate slow server action
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!validate.success) {
    return {
      message: validate.error.errors.map((err) => err.message).join(", "),
    };
  }

  if (password !== confirmPassword) {
    return { message: "Passwords do not match" };
  }

  // Simulate successful registration
  return { message: "Registration successful!" };
}
export async function registerEmployerAction(
  prevState: any,
  formData: FormData
) {
  const RegisterSchema = z.object({
    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters long"),
    companyEmail: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters long")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(4, "Password must be at least 4 characters long"),
  });

  const { companyEmail, companyName, password, confirmPassword } =
    Object.fromEntries(formData.entries());

  const validate = RegisterSchema.safeParse({
    companyEmail,
    companyName,
    confirmPassword,
    password,
  });

  // Simulate slow server action
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!validate.success) {
    return {
      message: validate.error.errors.map((err) => err.message).join(", "),
    };
  }

  if (password !== confirmPassword) {
    return { message: "Passwords do not match" };
  }
}
