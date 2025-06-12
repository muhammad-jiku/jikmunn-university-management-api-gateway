import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { PaymentServices } from "./payment.services";

const webhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentServices.webhook(req);
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
    const result = await PaymentServices.getAllFromDB(req);
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
    const result = await PaymentServices.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PaymentControllers = {
  webhook,
  getAllFromDB,
  getByIdFromDB,
};
