import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { StudentEnrolledCourseMarkControllers } from "./studentEnrolledCourseMark.controllers";
import { StudentEnrolledCourseMarkValidations } from "./studentEnrolledCourseMark.validations";

const router = express.Router();

router.route("/").get(StudentEnrolledCourseMarkControllers.getAllFromDB);

router
  .route("/my-marks")
  .get(StudentEnrolledCourseMarkControllers.getStudentMarks);

router
  .route("/update-marks")
  .post(
    validateRequest(StudentEnrolledCourseMarkValidations.updateStudentMarks),
    auth(USER_ROLES.FACULTY),
    StudentEnrolledCourseMarkControllers.updateMarks,
  );

router
  .route("/update-course-final-marks")
  .post(
    validateRequest(
      StudentEnrolledCourseMarkValidations.updateStudentCourseFinalMarks,
    ),
    auth(USER_ROLES.FACULTY),
    StudentEnrolledCourseMarkControllers.updateCourseFinalMarks,
  );

export const StudentEnrolledCourseMarkRoutes = router;
