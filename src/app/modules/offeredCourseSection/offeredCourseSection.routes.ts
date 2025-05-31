import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { OfferedCourseSectionControllers } from "./offeredCourseSection.controllers";
import { OfferedCourseSectionValidations } from "./offeredCourseSection.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(OfferedCourseSectionValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseSectionControllers.insertIntoDB,
  )
  .get(OfferedCourseSectionControllers.getAllFromDB);

router
  .route("/:id")
  .get(OfferedCourseSectionControllers.getByIdFromDB)
  .patch(
    validateRequest(OfferedCourseSectionValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseSectionControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    OfferedCourseSectionControllers.deleteOneFromDB,
  );

export const OfferedCourseSectionRoutes = router;
