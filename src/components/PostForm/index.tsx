import React from "react";
import { Form, Formik, FormikHelpers, Field } from "formik";
import userbase from "userbase-js";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";
import { StylesFormStyles } from "./index.styles";
import { toast } from "react-toastify";
import Loading from "@/components/core/Loading";
import * as yup from "yup";

export const postValidation = yup.object().shape({
  post: yup.string().min(10, "Too short!").required("Field is required"),
});

interface IPostFields {
  post: string;
}

const PostForm = () => {
  const user = useAppSelector((state) => state.user.user);

  const onFormSubmit = (values: IPostFields, { setSubmitting, resetForm }: FormikHelpers<IPostFields>) => {
    setSubmitting(true);
    userbase
      .insertItem({
        databaseName: "feed",
        item: {
          post: values.post,
          author: `${user?.profile?.firstName} ${user?.profile?.lastName}`,
        },
      })
      .then(() => {
        resetForm();
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
      <Formik initialValues={{ post: "" }} validationSchema={postValidation} onSubmit={onFormSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <div className="form-wrapper position-relative">
            {isSubmitting && <Loading />}
            <Form className={`position-relative ${isSubmitting ? "loading" : ""}`}>
              <div className="form-item">
                <Field name="post" placeholder="Type here..." component="textarea" />
                {errors.post && touched.post ? <div className="text-red-500">{errors.post}</div> : null}
              </div>
              <div>
                <button className="btn" disabled={Object.keys(errors).length > 0} type="submit">
                  Post
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </StylesFormStyles>
  );
};

export default PostForm;
