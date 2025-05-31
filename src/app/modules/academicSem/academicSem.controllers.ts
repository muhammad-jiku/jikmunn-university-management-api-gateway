import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AcademicSemServices } from "./academicSem.services";

const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AcademicSemServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AcademicSemServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AcademicSemServices.getByIdFromDB(req);
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
    const result = await AcademicSemServices.updateOneInDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const deleteOneFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AcademicSemServices.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemControllers = {
  insertIntoDB,
  getAllFromDB,
  updateOneInDB,
  getByIdFromDB,
  deleteOneFromDB,
};
