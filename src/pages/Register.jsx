import React from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

import { register, authLoginRequest } from "../store/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import FormikControl from "../components/formik/FormikControl";
import { ShowIcon, HideIcon, Logo24 } from "../components/icons";
import { constants } from "../config";
import manInLogo from "../assets/img/manInLogo.png";

const TITLE = "Registration - xWallet";

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
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="login">
        <div className="login-left">
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
            <div className="login-redirect">
              Have an account?{"  "}
              <Link to="/login" onClick={() => dispatch(authLoginRequest())}>
                Sign In
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
              Have an account?{"  "}
              <Link to="/login" onClick={() => dispatch(authLoginRequest())}>
                Sign In
              </Link>
            </div>
          </div>

          <div className="login-img">
            <img src={manInLogo} alt="man with laptop" />
          </div>
        </div>
      </div>
    </>
  );
}
