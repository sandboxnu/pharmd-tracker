import React from "react";
import { useInput } from "react-admin";
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const StatusCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <CheckboxButtonGroup
      onChange={props.onChange}
      label={props.label}
      color={props.color}
      error={error}
      className={props.className}
      checkboxClassName={props.checkboxClassName}
    >
      <FormControlLabel value="enrolled" label="Enrolled" />
      <FormControlLabel value="coop" label="Co Op" />
      <FormControlLabel value="graduated" label="Graduated" />
      <FormControlLabel value="leave" label="Leave" />
      <FormControlLabel value="dropback" label="Drop Back" />
    </CheckboxButtonGroup>
  );
};

export default StatusCheckboxInput;
