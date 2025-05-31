import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ManagementDeptControllers } from "./managementDept.controllers";
import { ManagementDeptValidations } from "./managementDept.validations";

const router = express.Router();

router
  .route("/")
  .get(ManagementDeptControllers.getAllFromDB)
  .post(
    validateRequest(ManagementDeptValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    ManagementDeptControllers.insertIntoDB,
  );

router
  .route("/:id")
  .get(ManagementDeptControllers.getByIdFromDB)
  .patch(
    validateRequest(ManagementDeptValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    ManagementDeptControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    ManagementDeptControllers.deleteOneFromDB,
  );

export const ManagementDeptRoutes = router;
