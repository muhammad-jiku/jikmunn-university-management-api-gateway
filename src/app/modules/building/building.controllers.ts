import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { BuildingServices } from "./building.services";

const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await BuildingServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await BuildingServices.getAllFromDB(req);
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
    const result = await BuildingServices.getByIdFromDB(req);
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
    const result = await BuildingServices.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await BuildingServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingControllers = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneInDB,
};
