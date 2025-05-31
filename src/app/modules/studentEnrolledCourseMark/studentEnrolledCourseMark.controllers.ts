import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { StudentEnrolledCourseMarkServices } from "./studentEnrolledCourseMark.services";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentMarks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.getStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.updateMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourseFinalMarks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result =
      await StudentEnrolledCourseMarkServices.updateCourseFinalMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseMarkControllers = {
  getAllFromDB,
  updateMarks,
  updateCourseFinalMarks,
  getStudentMarks,
};
