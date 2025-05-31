import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { OfferedCourseScheduleControllers } from "./offeredCourseSchedule.controllers";
import { OfferedCourseScheduleValidations } from "./offeredCourseSchedule.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(OfferedCourseScheduleValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseScheduleControllers.insertIntoDB,
  )
  .get(OfferedCourseScheduleControllers.getAllFromDB);

router
  .route("/:id")
  .get(OfferedCourseScheduleControllers.getByIdFromDB)
  .patch(
    validateRequest(OfferedCourseScheduleValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseScheduleControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseScheduleControllers.deleteOneFromDB,
  );

export const OfferedCourseScheduleRoutes = router;
