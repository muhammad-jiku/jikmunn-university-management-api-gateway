import { z } from "zod";

const create = z.object({
  body: z
    .object({
      roomNumber: z.string({
        required_error: "Room number is required",
      }),
      floor: z.string({
        required_error: "Floor is required",
      }),
      buildingId: z.string({
        required_error: "Building id is required",
      }),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      roomNumber: z.string().optional(),
      floor: z.string().optional(),
      buildingId: z.string().optional(),
    })
    .strict()
    .optional(),
});

export const RoomValidations = {
  create,
  update,
};
