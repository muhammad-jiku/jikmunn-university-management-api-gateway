import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { SemRegistrationControllers } from "./semRegistration.controllers";
import { SemRegistrationValidations } from "./semRegistration.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(SemRegistrationValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    SemRegistrationControllers.insertIntoDB,
  )
  .get(SemRegistrationControllers.getAllFromDB);

router
  .route("/my-registration")
  .get(auth(USER_ROLES.STUDENT), SemRegistrationControllers.getMyRegistration);

router
  .route("/my-semester-registration-courses")
  .get(
    auth(USER_ROLES.STUDENT),
    SemRegistrationControllers.mySemRegistrationCourses,
  );

router
  .route("/enroll-into-course")
  .post(
    validateRequest(SemRegistrationValidations.enrollIntoCourse),
    auth(USER_ROLES.STUDENT),
    SemRegistrationControllers.enrollIntoCourse,
  );

router
  .route("/withdraw-from-course")
  .post(
    validateRequest(SemRegistrationValidations.withdrawFromCourse),
    auth(USER_ROLES.STUDENT),
    SemRegistrationControllers.withDrawFromCourse,
  );

router
  .route("/confirm-registration")
  .post(
    auth(USER_ROLES.STUDENT),
    SemRegistrationControllers.confirmRegistration,
  );

router
  .route("/start-registration")
  .post(auth(USER_ROLES.STUDENT), SemRegistrationControllers.startRegistration);

router
  .route("/:id")
  .get(SemRegistrationControllers.getByIdFromDB)
  .patch(
    validateRequest(SemRegistrationValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    SemRegistrationControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    SemRegistrationControllers.deleteOneFromDB,
  );

router
  .route("/:id/start-new-semester")
  .post(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    SemRegistrationControllers.startNewSem,
  );

export const SemRegistrationRoutes = router;
