import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { SemRegistrationServices } from "./semRegistration.services";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.getAllFromDB(req);
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
    const result = await SemRegistrationServices.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.insertIntoDB(req);
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
    const result = await SemRegistrationServices.updateOneInDB(req);
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
    const result = await SemRegistrationServices.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.getMyRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.startRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const mySemRegistrationCourses = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.mySemRegistrationCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.enrollIntoCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withDrawFromCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.withDrawFromCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SemRegistrationServices.confirmRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startNewSem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemRegistrationServices.startNewSem(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemRegistrationControllers = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSem,
};
