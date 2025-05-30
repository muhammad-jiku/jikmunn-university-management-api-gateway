import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    "/semester-registrations",
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(
    `/semester-registrations/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/semester-registrations/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const deleteOneFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(
    `/semester-registrations/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registrations/get-my-registration`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const startRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const mySemRegistrationCourses = async (
  req: Request,
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registrations/get-my-semsester-courses`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations/withdraw-from-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations/confirm-my-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const startNewSem = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.post(
    `/semester-registrations/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

export const SemRegistrationServices = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneFromDB,
  getMyRegistration,
  startRegistration,
  mySemRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSem,
};
