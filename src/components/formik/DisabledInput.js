import React from "react";
import PT from "prop-types";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

DisabledInput.propTypes = {
  label: PT.string,
  name: PT.string,
  icon: PT.element,
  status: PT.string,
  disabled: PT.bool,
  form: PT.any,
  field: PT.any,
};
function DisabledInput(props) {
  const { label, name, icon, status, disabled = false, ...rest } = props;
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
          <Field id={name} name={name} disabled={disabled} {...rest} />
          {status ? (
            <span className="form-control__input-status">{status}</span>
          ) : null}
        </div>
        <div className="form-control__input-item">
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </div>
  );
}

export default DisabledInput;
