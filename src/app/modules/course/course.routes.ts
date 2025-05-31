import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CourseControllers } from "./course.controllers";
import { CourseValidations } from "./course.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(CourseValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    CourseControllers.insertIntoDB,
  )
  .get(CourseControllers.getAllFromDB);

router
  .route("/:id")
  .get(CourseControllers.getByIdFromDB)
  .patch(
    validateRequest(CourseValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    CourseControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    CourseControllers.deleteOneFromDB,
  );

export const CourseRoutes = router;
