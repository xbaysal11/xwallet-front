import React from "react";
import PT from "prop-types";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import RadioButtons from "./RadioButtons";
import DisabledInput from "./DisabledInput";

FormikControl.propTypes = { control: PT.string };

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "disabledinput":
      return <DisabledInput {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "datePicker":
      return <DatePicker {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
