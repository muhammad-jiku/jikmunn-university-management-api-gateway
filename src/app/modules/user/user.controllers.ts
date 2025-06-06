import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { UserServices } from "./user.services";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserServices.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserServices.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
  createFaculty,
  createAdmin,
};
