import express, { NextFunction, Request, Response } from "express";
import { USER_ROLES } from "../../../enums";
import { FileUploadHelper } from "../../../helpers/fileUploadHelper";
import auth from "../../middlewares/auth";
import { UserControllers } from "./user.controllers";
import { UserValidations } from "./user.validations";

const router = express.Router();

router.post(
  "/create-student",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidations.createStudent.parse(JSON.parse(req.body.data));
    return UserControllers.createStudent(req, res, next);
  },
);

router.post(
  "/create-faculty",
  auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidations.createFaculty.parse(JSON.parse(req.body.data));
    return UserControllers.createFaculty(req, res, next);
  },
);

router.post(
  "/create-admin",
  auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidations.createAdmin.parse(JSON.parse(req.body.data));
    return UserControllers.createAdmin(req, res, next);
  },
);

export const UserRoutes = router;
