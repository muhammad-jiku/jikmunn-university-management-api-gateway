import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { StudentServices } from "./student.services";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getMyAcademicInfos(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseSchedules = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getMyCourseSchedules(req);
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
    const result = await StudentServices.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getStudentProfile(req);
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
    console.log("controller");
    const result = await StudentServices.updateOneInDB(req);
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
    const result = await StudentServices.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneFromDB,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile,
};
