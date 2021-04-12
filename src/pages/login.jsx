import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { login, authRegisterRequest } from "../store/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import FormikControl from "../components/formik/FormikControl";
import { ShowIcon, HideIcon, Logo24 } from "../components/icons";
import manInLogo from "../assets/img/manInLogo.png";

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
    <div className="login">
      <div className="login-left">
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
                    placeholder="Password"
                    name="password"
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
                    Sign In
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div className="login-redirect">
            Don’t have an account?{"  "}
            <Link
              to="/register"
              onClick={() => dispatch(authRegisterRequest())}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="logo">
          <div className="logo-img">
            <Logo24 />
          </div>
          <div className="logo-text">xWallet</div>
        </div>
        <div className="login-text">
          <div className="login-title">Hello!</div>
          <div className="login-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras
            semper auctor neque vitae tempus quam pellentesque. Cras sed felis
            eget velit aliquet. Tristique senectus et netus et malesuada fames
            ac turpis egestas. Aliquet lectus proin nibh nisl condimentum id
            venenatis a.
          </div>
          <div className="login-redirect">
            Don’t have an account?{"  "}
            <Link
              to="/register"
              onClick={() => dispatch(authRegisterRequest())}
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="login-img">
          <img src={manInLogo} alt="man with laptop" />
        </div>
      </div>
    </div>
  );
}
