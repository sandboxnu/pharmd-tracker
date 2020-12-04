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
      <FormControlLabel value="ENROLLED" label="Enrolled" />
      <FormControlLabel value="COOP" label="Co-op" />
      <FormControlLabel value="GRADUATED" label="Graduated" />
      <FormControlLabel value="LEAVE" label="Leave" />
      <FormControlLabel value="DROP_BACK" label="Drop Back" />
    </CheckboxButtonGroup>
  );
};

export default StatusCheckboxInput;
