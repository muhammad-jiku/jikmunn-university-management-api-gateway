import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { OfferedCourseControllers } from "./offeredCourse.controllers";
import { OfferedCourseValidations } from "./offeredCourse.validations";

const router = express.Router();

router
  .route("/")
  .get(OfferedCourseControllers.getAllFromDB)
  .post(
    validateRequest(OfferedCourseValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseControllers.insertIntoDB,
  );

router
  .route("/:id")
  .get(OfferedCourseControllers.getByIdFromDB)
  .patch(
    validateRequest(OfferedCourseValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseControllers.deleteOneFromDB,
  );

export const OfferedCourseRoutes = router;
