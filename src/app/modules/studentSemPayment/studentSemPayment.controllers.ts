import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { StudentSemPaymentServices } from "./studentSemPayment.services";

const getMyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentSemPaymentServices.getMyPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const initiatePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentSemPaymentServices.initiatePayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const completePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentSemPaymentServices.completePayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemPaymentControllers = {
  getMyPayment,
  initiatePayment,
  completePayment,
};
