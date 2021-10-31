import * as Yup from "yup";

const atLeastOneLowercaseCharacter = /^(?=.*[a-z]).+$/;
const atLeastOneUppercaseCharacter = /^(?=.*[A-Z]).+$/;
const atLeastOneDigit = /^(?=.*\d).+$/;

export const emailValidationSchema = Yup.string().email("Incorrect email form.").required("This field is required");
export const passwordValidationSchema = Yup.string()
    .required("Password is required")
    .matches(atLeastOneLowercaseCharacter, "Needed at least one lowercase character")
    .matches(atLeastOneUppercaseCharacter, "min. 1 capital letter")
    .matches(atLeastOneDigit, "min. 1 digit")
    .min(8, "At least 8 characters");

export const LoginFormValidationSchema = Yup.object({
    email: emailValidationSchema,
    password: passwordValidationSchema
});