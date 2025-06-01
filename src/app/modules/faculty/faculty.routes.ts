import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { FacultyControllers } from "./faculty.controllers";
import { FacultyValidations } from "./faculty.validations";

const router = express.Router();

router.route("/").get(FacultyControllers.getAllFromDB);

router.route("/profile/:id").get(FacultyControllers.getFacultyProfile);

router
  .route("/my-courses")
  .get(auth(USER_ROLES.FACULTY), FacultyControllers.getMyCourses);

router
  .route("/my-course-students")
  .get(auth(USER_ROLES.FACULTY), FacultyControllers.getMyCourseStudents);

router
  .route("/:id")
  .get(FacultyControllers.getByIdFromDB)
  .patch(
    validateRequest(FacultyValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    FacultyControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    FacultyControllers.deleteOneFromDB,
  );

export const FacultyRoutes = router;
