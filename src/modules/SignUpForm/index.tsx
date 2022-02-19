import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, FormikHelpers, Field } from "formik";
import userbase from "userbase-js";
import { signUpInitialValues, ISignUpValues, signupValidation } from "@/validations";
import { setToken, setUser, setAuthenticated } from "@/store/user";
import Loading from "@/components/core/Loading";
import { StylesFormStyles } from "./index.styles";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values: ISignUpValues, { setSubmitting }: FormikHelpers<ISignUpValues>) => {
    setSubmitting(true);
    userbase
      .signUp({
        email: values.email,
        username: values.email,
        password: values.password,
        profile: {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName,
        },
      })
      .then((user: any) => {
        // user account created
        dispatch(setUser(user));
        dispatch(setToken(user.authToken));
        dispatch(setAuthenticated(true));
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <StylesFormStyles>
      <Formik initialValues={signUpInitialValues} validationSchema={signupValidation} onSubmit={onFormSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <div className="form-wrapper position-relative">
            {isSubmitting && <Loading />}
            <Form className={`position-relative ${isSubmitting ? "loading" : ""}`}>
              <div className="form-item">
                <Field name="firstName" placeholder="First Name" />
                {errors.firstName && touched.firstName ? <div className="text-red-500">{errors.firstName}</div> : null}
              </div>
              <div className="form-item">
                <Field name="lastName" placeholder="Last Name" />
                {errors.lastName && touched.lastName ? <div className="text-red-500">{errors.lastName}</div> : null}
              </div>
              <div className="form-item">
                <Field name="companyName" placeholder="Company Name" />
                {errors.companyName && touched.companyName ? (
                  <div className="text-red-500">{errors.companyName}</div>
                ) : null}
              </div>
              <div className="form-item">
                <Field name="email" placeholder="john@acme.com" type="email" />
                {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
              </div>
              <div className="form-item">
                <Field name="password" placeholder="Enter Password" type="password" />
                {errors.password && touched.password ? <div className="text-red-500">{errors.password}</div> : null}
              </div>
              <div className="form-item">
                <Field name="confirmPassword" placeholder="Confirm your Password" type="password" />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-500">{errors.confirmPassword}</div>
                ) : null}
              </div>
              <div>
                <button className="btn" disabled={Object.keys(errors).length > 0} type="submit">
                  Continue
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </StylesFormStyles>
  );
};

export default SignUpForm;
