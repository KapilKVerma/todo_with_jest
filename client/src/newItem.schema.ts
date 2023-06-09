import { number, string, object, TypeOf, date } from "zod";

export const newItemSchema = object({
  firstName: string()
    .nonempty("First name is required")
    .min(2, { message: "Must be 2 characters or more" }),

  lastName: string()
    .nonempty("Last name is required")
    .min(2, { message: "Must be 2 characters or more" }),

  email: string().email().nonempty(),

  dob: date().refine((value) => !value, "Date of birth is required"),

  contactNumber: number()
    .min(100000000, "Contact number is not valid")
    .refine((value) => !value, "Contact number is required"),

  unitNumber: string().optional(),

  streetAddress: string()
    .nonempty("Street address is required")
    .min(2, { message: "Must be 2 characters or more" }),

  postCode: string()
    .nonempty("Post code is required")
    .min(4, "Post code not valid"),

  state: string().nonempty("State is required"),
});

export type NewItemInput = TypeOf<typeof newItemSchema>;
