import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { StudentControllers } from "./student.controllers";
import { StudentValidations } from "./student.validations";

const router = express.Router();

router.route("/").get(StudentControllers.getAllFromDB);

router.route("/profile/:id").get(StudentControllers.getStudentProfile);

router
  .route("/my-courses")
  .get(auth(USER_ROLES.STUDENT), StudentControllers.getMyCourses);

router
  .route("/my-academic-infos")
  .get(auth(USER_ROLES.STUDENT), StudentControllers.getMyAcademicInfos);

router
  .route("/my-course-schedules")
  .get(auth(USER_ROLES.STUDENT), StudentControllers.getMyCourseSchedules);

router
  .route("/:id")
  .get(StudentControllers.getByIdFromDB)
  .patch(
    validateRequest(StudentValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    StudentControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    StudentControllers.deleteOneFromDB,
  );

export const StudentRoutes = router;
