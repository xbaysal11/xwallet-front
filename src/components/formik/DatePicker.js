import React from "react";
import PT from "prop-types";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

DatePicker.propTypes = {
  label: PT.string,
  name: PT.string,
  icon: PT.element,
  form: PT.any,
  field: PT.any,
  changed: PT.any,
  isValid: PT.any,
};

function DatePicker(props) {
  const { label, name, icon, changed, isValid, ...rest } = props;
  return (
    <div className="form-control">
      <div className="form-control__label">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="form-control__input">
        <div className="form-control__input-item">
          {icon ? (
            <span className="form-control__input-icon">{icon}</span>
          ) : null}

          <Field
            id={name}
            name={name}
            {...rest}
            className={
              changed ? (isValid ? "error-input" : "success-input") : ""
            }
          />
        </div>
        <div className="form-control__input-item">
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
