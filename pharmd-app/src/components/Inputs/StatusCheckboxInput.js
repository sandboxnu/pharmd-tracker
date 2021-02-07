//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

//-------------------------- COMPONENT --------------------------

const StatusCheckboxInput = ({ checkboxClassName, className, color, label, setFilter, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  const statusCheckbox = (event, array) => {
    setFilter("status", array);
  };

  return (
    <CheckboxFilterButtonGroup
      onChange={statusCheckbox}
      label={label}
      color={color}
      error={error}
      className={className}
      checkboxClassName={checkboxClassName}
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
