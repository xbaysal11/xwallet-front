import React, { useState } from "react";
import PT from "prop-types";
import { Field, ErrorMessage } from "formik";

import { SuccessInputIcon, ErrorInputIcon } from "../icons";
import TextError from "./TextError";

Input.propTypes = {
  label: PT.string,
  name: PT.string,
  icon: PT.element,
  form: PT.any,
  field: PT.any,
  placeholder: PT.any,
  type: PT.any,
  showIcon: PT.any,
  hideIcon: PT.any,
  changed: PT.any,
  isValid: PT.any,
};
function Input(props) {
  const {
    label,
    name,
    icon,
    showIcon,
    hideIcon,
    changed,
    isValid,
    ...rest
  } = props;
  const [isPasswordShown, setPasswordToggle] = useState(false);
  return (
    <div className="form-control">
      <div className="form-control__label">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="form-control__input">
        <div className="form-control__input-item">
          {icon && <span className="form-control__input-icon">{icon}</span>}

          <div className="input_container">
            <Field
              id={name}
              name={name}
              type={isPasswordShown ? "text" : "password"}
              {...rest}
              className={
                changed ? (isValid ? "error-input" : "success-input") : ""
              }
            />
            {changed && (isValid ? <SuccessInputIcon /> : <ErrorInputIcon />)}
          </div>
          {showIcon && hideIcon ? (
            <div className="form-control__input-password">
              <button
                type="button"
                onClick={() => setPasswordToggle(!isPasswordShown)}
              >
                <span>{isPasswordShown ? showIcon : hideIcon}</span>
              </button>
            </div>
          ) : null}
        </div>
        <div className="form-control__input-item">
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </div>
  );
}

export default Input;
