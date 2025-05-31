import { z } from "zod";

const create = z.object({
  body: z
    .object({
      title: z.string({
        required_error: "Title is required",
      }),
      academicFacultyId: z.string({
        required_error: "Academic faculty id is required",
      }),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      title: z.string().optional(),
      academicFacultyId: z.string().optional(),
    })
    .strict(),
});

export const AcademicDeptValidations = {
  create,
  update,
};
