import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { FacultyServices } from "./faculty.services";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FacultyServices.getAllFromDB(req);
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
    const result = await FacultyServices.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FacultyServices.getMyCourseStudents(req);
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
    const result = await FacultyServices.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFacultyProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FacultyServices.getFacultyProfile(req);
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
    const result = await FacultyServices.updateOneInDB(req);
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
    const result = await FacultyServices.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyControllers = {
  updateOneInDB,
  getAllFromDB,
  getByIdFromDB,
  getFacultyProfile,
  getMyCourseStudents,
  getMyCourses,
  deleteOneFromDB,
};
