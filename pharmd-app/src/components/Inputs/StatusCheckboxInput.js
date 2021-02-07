//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
// import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//-------------------------- COMPONENT --------------------------

const StatusCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const statusCheckbox = (event, array) => {
    props.setFilter("status", array);
    console.log("Status Filter:", array);
  };

  return (
    <CheckboxFilterButtonGroup
      onChange={statusCheckbox}
      label={props.label}
      color={props.color}
      error={error}
      className={props.className}
      checkboxClassName={props.checkboxClassName}
    >
      <FormControlLabel value="enrolled" label="Enrolled" />
      <FormControlLabel value="coop" label="Coop" />
      <FormControlLabel value="graduated" label="Graduated" />
      <FormControlLabel value="leave" label="Leave" />
      <FormControlLabel value="dropback" label="Drop Back" />
    </CheckboxFilterButtonGroup>
  );
};

export default StatusCheckboxInput;
