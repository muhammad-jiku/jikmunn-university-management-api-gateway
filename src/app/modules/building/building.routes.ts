import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { BuildingControllers } from "./building.controllers";
import { BuildingValidations } from "./building.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(BuildingValidations.create),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    BuildingControllers.insertIntoDB,
  )
  .get(BuildingControllers.getAllFromDB);

router
  .route("/:id")
  .get(BuildingControllers.getByIdFromDB)
  .patch(
    validateRequest(BuildingValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    BuildingControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    BuildingControllers.deleteOneInDB,
  );

export const BuildingRoutes = router;
