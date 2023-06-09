import { number, string, object, TypeOf, date } from "zod";

const today = new Date();

export const newItemSchema = object({
  firstName: string()
    .nonempty("First name is required")
    .min(2, { message: "Must be 2 characters or more" }),

  lastName: string()
    .nonempty("Last name is required")
    .min(2, { message: "Must be 2 characters or more" }),

  email: string()
    .email({ message: "Email is invalid" })
    .nonempty("Email is required"),

  dob: date().max(
    new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()),
    "Date of birth must be 18 years ago"
  ),

  contactNumber: number({
    invalid_type_error: "Contact number is required",
  }).refine((value) => value > 400000000 && value < 500000000, {
    message: "Contact number is invalid",
  }),

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
