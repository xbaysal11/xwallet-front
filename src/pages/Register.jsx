import React from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";

import { register, authLoginRequest } from "../store/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import FormikControl from "../components/formik/FormikControl";
import {
  // UsernameIcon,
  // PasswordIcon,
  ShowIcon,
  HideIcon,
} from "../components/icons";
import { constants } from "../config";
// import "./styles.scss";

export default function Register() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    secretWord: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Enter first name"),
    lastName: Yup.string().required("Enter last name"),
    secretWord: Yup.string().required("Enter secret word"),
    email: Yup.string().email().required("Enter email"),
    password: Yup.string()
      .min(6, "Minimum 6 symbols")
      .required("Enter password"),
  });

  const error = store.auth.error;

  const onSubmit = (values) => {
    dispatch(register(values));
    setTimeout(() => {
      if (store.auth.status === constants.SUCCESS) {
        dispatch(authLoginRequest());
        history.push("/login");
      }
    }, 1000);
  };
  return (
    <div className="login_form_block">
      <div className="login_form_title">
        <p>Sign up</p>
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
                type="text"
                placeholder="First Name"
                name="firstName"
                // icon={<UsernameIcon />}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                changed={formik.touched.firstName}
                isValid={formik.errors.firstName}
                onChange={(e) => (
                  formik.setFieldTouched(e.target.name, true, true),
                  formik.handleChange(e)
                )}
              />
              <FormikControl
                control="input"
                type="text"
                placeholder="Last Name"
                name="lastName"
                // icon={<UsernameIcon />}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                changed={formik.touched.lastName}
                isValid={formik.errors.lastName}
                onChange={(e) => (
                  formik.setFieldTouched(e.target.name, true, true),
                  formik.handleChange(e)
                )}
              />
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
              <FormikControl
                control="input"
                type="text"
                placeholder="Secret word"
                name="secretWord"
                // icon={<UsernameIcon />}
                value={formik.values.secretWord}
                onBlur={formik.handleBlur}
                changed={formik.touched.secretWord}
                isValid={formik.errors.secretWord}
                onChange={(e) => (
                  formik.setFieldTouched(e.target.name, true, true),
                  formik.handleChange(e)
                )}
              />
              <button id="loginButton" type="submit">
                Sign up
              </button>
            </Form>
          );
        }}
      </Formik>
      <Link to="/login" onClick={() => dispatch(authLoginRequest())}>
        Sign in
      </Link>
    </div>
  );
}
