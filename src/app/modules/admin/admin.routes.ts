import express from "express";
import { USER_ROLES } from "../../../enums";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AdminControllers } from "./admin.controllers";
import { AdminValidations } from "./admin.validations";

const router = express.Router();

router.route("/").get(AdminControllers.getAllFromDB);

router
  .route("/:id")
  .get(AdminControllers.getByIdFromDB)
  .patch(
    validateRequest(AdminValidations.update),
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    AdminControllers.updateOneInDB,
  )
  .delete(
    auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
    AdminControllers.deleteOneFromDB,
  );

export const AdminRoutes = router;
