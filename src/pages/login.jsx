import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { login, authRegisterRequest } from "../store/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import FormikControl from "../components/formik/FormikControl";
import {
  // UsernameIcon,
  // PasswordIcon,
  ShowIcon,
  HideIcon,
} from "../components/icons";
// import "./styles.scss";

export default function Login() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Enter email"),
    password: Yup.string().required("Enter password"),
  });

  const error = store.auth.error;

  const onSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <div className="login_form_block">
      <div className="login_form_title">
        <p>Sign in</p>
      </div>
      {error && (
        <div className="login_form_message">
          <p>{error}</p>
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="login_form">
              <FormikControl
                control="input"
                type="email"
                placeholder="Email"
                name="email"
                // icon={<UsernameIcon />}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                changed={formik.touched.email}
                isValid={formik.errors.email}
                onChange={(e) => (
                  formik.setFieldTouched(e.target.name, true, true),
                  formik.handleChange(e)
                )}
              />
              <FormikControl
                control="input"
                // type="password"
                placeholder="Password"
                name="password"
                // icon={<PasswordIcon />}
                showIcon={<ShowIcon />}
                hideIcon={<HideIcon />}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                changed={formik.touched.password}
                isValid={formik.errors.password}
                onChange={(e) => (
                  formik.setFieldTouched(e.target.name, true, true),
                  formik.handleChange(e)
                )}
              />
              <button id="loginButton" type="submit">
                Sign in
              </button>
            </Form>
          );
        }}
      </Formik>
      <Link to="/register" onClick={() => dispatch(authRegisterRequest())}>
        Sign Up
      </Link>
    </div>
  );
}
