import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AdminServices } from "./admin.services";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdminServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdminServices.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdminServices.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdminServices.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdminControllers = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneFromDB,
};
