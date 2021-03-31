import React from "react";
import { Field, ErrorMessage } from "formik";
import PT from "prop-types";

import TextError from "./TextError";

Select.propTypes = { label: PT.string, name: PT.string, options: PT.array };

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <div className="form-control__label">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="form-control__input">
        <div className="form-control__input-item">
          <Field as="select" id={name} name={name} {...rest}>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </Field>
        </div>
        <div className="form-control__input-item">
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </div>
  );
}

export default Select;
