import { emailRegex, phoneRegex, postCodeRegex } from "./functions/regex";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "Invalid email format"),
  phone: yup
    .string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  postCode: yup.string().matches(postCodeRegex, "Invalid post code").required(),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});
