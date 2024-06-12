import { UserRole } from "@prisma/client";
import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required!" }),
  password: z.string().min(1, { message: "Password is required!" }),
  code: z.optional(z.string()),
});

const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required!" }),
  password: z.string().min(6, { message: "Minimum 6 characters required!" }),
  name: z.string().min(1, { message: "Name is required!" }),
});

const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required!" }),
});

const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required!" }),
});

const SettingSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export {
  LoginSchema,
  RegisterSchema,
  ResetSchema,
  NewPasswordSchema,
  SettingSchema,
};
