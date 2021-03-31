import React from "react";
import PT from "prop-types";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

RadioButtons.propTypes = {
  label: PT.string,
  name: PT.string,
  options: PT.array,
};

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <div className="form-control__label">
        <label htmlFor={label}>{label}</label>
      </div>
      <div className="form-control__input">
        <div className="form-control__radio">
          <Field name={name}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <div
                    className="form-control__input-item form-control__input--radio"
                    key={option.key}
                  >
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>
                );
              });
            }}
          </Field>
        </div>
        <div className="form-control__input-item">
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </div>
  );
}

export default RadioButtons;
