import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controllers";
import { AuthValidations } from "./auth.validations";

const router = express.Router();

router
  .route("/login")
  .post(
    validateRequest(AuthValidations.loginZodSchema),
    AuthControllers.loginUser,
  );

router
  .route("/refresh-token")
  .post(
    validateRequest(AuthValidations.refreshTokenZodSchema),
    AuthControllers.refreshToken,
  );

router.route("/forgot-password").post(AuthControllers.forgotPassword);

router.route("/reset-password").post(AuthControllers.resetPassword);

router
  .route("/change-password")
  .post(
    auth(
      USER_ROLES.SUPER_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.STUDENT,
      USER_ROLES.FACULTY,
    ),
    validateRequest(AuthValidations.changePasswordZodSchema),
    AuthControllers.changePassword,
  );

export const AuthRoutes = router;
