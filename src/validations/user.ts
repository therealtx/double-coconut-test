import * as yup from "yup";

// Sign up
export interface ISignUpValues {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signUpInitialValues: ISignUpValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const signupValidation = yup.object().shape({
  email: yup.string().required("Email is Required").email("Email is Invalid"),
  firstName: yup.string().required("Name is Required").max(50, "Name must be smaller than 50 characters"),
  lastName: yup.string().required("Last name is Required").max(50, "Last name must be smaller than 50 characters"),
  companyName: yup.string().required("Company Name is Required"),
  password: yup.string().min(6, "Too short!").required("Password is Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

// Sign in
export interface ISignInValues {
  email: string;
  password: string;
}

export const signInInitialValues: ISignInValues = {
  email: "",
  password: "",
};

export const signInValidation = yup.object().shape({
  email: yup.string().required("Email is Required").email("Email is Invalid"),
  password: yup.string().min(6, "Too short!").required("Password is Required"),
});

// Profile
export interface IProfileValues {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export const profileValidation = yup.object().shape({
  firstName: yup.string().required("Name is Required").max(50, "Name must be smaller than 50 characters"),
  lastName: yup.string().required("Last name is Required").max(50, "Last name must be smaller than 50 characters"),
  companyName: yup.string().required("Company Name is Required"),
  email: yup.string().required("Email is Required").email("Email is Invalid"),
  oldPassword: yup.string().min(6, "Too short!").required("Password is Required"),
  password: yup.string().min(6, "Too short!").required("Password is Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});
