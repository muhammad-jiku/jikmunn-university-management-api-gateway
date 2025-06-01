import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { AuthService, CoreService } from "../../../shared/axios";

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get("/students", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    "/students/my-courses",
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const getMyAcademicInfos = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    "/students/my-academic-info",
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

const getMyCourseSchedules = async (
  req: Request,
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    "/students/my-course-schedules",
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
  const response: IGenericResponse = await CoreService.get(`/students/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getStudentProfile = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/students/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  console.log(id);
  const response: IGenericResponse = await AuthService.patch(
    `/students/${id}`,
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
    `/students/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

export const StudentServices = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteOneFromDB,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile,
};
