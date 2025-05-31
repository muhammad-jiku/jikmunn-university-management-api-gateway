import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import { StudentSemPaymentControllers } from "./studentSemPayment.controllers";

const router = express.Router();

router
  .route("/my-semester-payments")
  .get(StudentSemPaymentControllers.getMyPayment);

router
  .route("/initiate-payment")
  .post(auth(USER_ROLES.STUDENT), StudentSemPaymentControllers.initiatePayment);

router
  .route("/complete-payment")
  .post(auth(USER_ROLES.STUDENT), StudentSemPaymentControllers.completePayment);

export const StudentSemPaymentRoutes = router;
