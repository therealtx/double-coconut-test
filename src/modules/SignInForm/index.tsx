import React from "react";
import { Form, Formik, FormikHelpers, Field } from "formik";
import userbase from "userbase-js";
import { signInInitialValues, ISignInValues, signInValidation } from "@/validations";
import { setAuthenticated, setToken, setUser } from "@/store/user";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";
import { StylesFormStyles } from "./index.styles";
import { toast } from "react-toastify";
import Loading from "@/components/core/Loading";

const SignInForm = () => {
  const dispatch = useAppDispatch();

  /**
   * Submit form handler.
   * @param values user object
   * @param param1 formik helper
   */
  const onFormSubmit = (values: ISignInValues, { setSubmitting }: FormikHelpers<ISignInValues>) => {
    setSubmitting(true);
    userbase
      .signOut()
      .catch(() => {})
      .finally(() => {
        userbase
          .signIn({
            username: values.email,
            password: values.password,
          })
          .then((user) => {
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
      });
  };

  return (
    <StylesFormStyles>
      <Formik initialValues={signInInitialValues} validationSchema={signInValidation} onSubmit={onFormSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <div className="form-wrapper position-relative">
            {isSubmitting && <Loading />}
            <Form className={`position-relative ${isSubmitting ? "loading" : ""}`}>
              <div className="form-item">
                <Field name="email" placeholder="john@acme.com" type="email" />
                {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
              </div>
              <div className="form-item">
                <Field name="password" placeholder="Enter Password" type="password" />
                {errors.password && touched.password ? <div className="text-red-500">{errors.password}</div> : null}
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

export default SignInForm;
