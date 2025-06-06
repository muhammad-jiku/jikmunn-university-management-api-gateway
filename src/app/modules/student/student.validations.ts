import { z } from "zod";

const update = z.object({
  body: z
    .object({
      name: z
        .object({
          firstName: z.string().optional(),
          lastName: z.string().optional(),
          middleName: z.string().optional(),
        })
        .strict()
        .optional(),
      dateOfBirth: z.string().optional(),
      gender: z.string().optional(),
      bloodGroup: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      // department: z.string().optional(),
      // subject: z.string().optional(),
      guardian: z
        .object({
          fatherName: z.string().optional(),
          fatherOccupation: z.string().optional(),
          fatherContactNo: z.string().optional(),
          motherName: z.string().optional(),
          motherOccupation: z.string().optional(),
          motherContactNo: z.string().optional(),
          address: z.string().optional(),
        })
        .strict()
        .optional(),
      localGuardian: z
        .object({
          name: z.string().optional(),
          occupation: z.string().optional(),
          contactNo: z.string().optional(),
          address: z.string().optional(),
        })
        .strict()
        .optional(),
    })
    .strict()
    .optional(),
});

export const StudentValidations = {
  update,
};
