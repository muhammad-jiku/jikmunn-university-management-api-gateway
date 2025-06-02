import { z } from "zod";

const loginZodSchema = z.object({
  body: z
    .object({
      id: z.string({
        required_error: "ID is required",
      }),
      password: z.string({
        required_error: "Password is required",
      }),
    })
    .strict(),
});

const refreshTokenZodSchema = z.object({
  cookies: z
    .object({
      refreshToken: z.string({
        required_error: "Refresh Token is required",
      }),
    })
    .strict(),
});

const changePasswordZodSchema = z.object({
  body: z
    .object({
      oldPassword: z.string({
        required_error: "Old password  is required",
      }),
      newPassword: z.string({
        required_error: "New password  is required",
      }),
    })
    .strict(),
});

export const AuthValidations = {
  loginZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
};
