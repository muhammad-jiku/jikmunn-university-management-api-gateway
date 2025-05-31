import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyControllers } from "./academicFaculty.controllers";
import { AcademicFacultyValidations } from "./academicFaculty.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(AcademicFacultyValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    AcademicFacultyControllers.insertIntoDB,
  )
  .get(AcademicFacultyControllers.getAllFromDB);

router
  .route("/:id")
  .get(AcademicFacultyControllers.getByIdFromDB)
  .patch(
    validateRequest(AcademicFacultyValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    AcademicFacultyControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    AcademicFacultyControllers.deleteOneFromDB,
  );

export const AcademicFacultyRoutes = router;
