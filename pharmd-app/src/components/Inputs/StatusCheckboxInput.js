//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

// Style Imports
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

//-------------------------- STYLE --------------------------
// Use styles to make the label change when the checkbox is checked
const styles = {
  checked: {
    // use the direct sibling selector to get the label
    "&, & + $label": {
      fontWeight: 600
    }
  },
  label: {}
};

//-------------------------- COMPONENT --------------------------

const StatusCheckboxInput = ({ checkboxClassName, className, classes, color, label, setFilter, ...props }) => {
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
      checkboxCheckedClass={classes.checked}
      checkboxClassName={checkboxClassName}
    >
      <FormControlLabel value="enrolled" label="Enrolled" classes={{ label: classes.label }} />
      <FormControlLabel value="coop" label="Coop" classes={{ label: classes.label }} />
      <FormControlLabel value="graduated" label="Graduated" classes={{ label: classes.label }} />
      <FormControlLabel value="leave" label="Leave" classes={{ label: classes.label }} />
      <FormControlLabel value="dropback" label="Drop Back" classes={{ label: classes.label }} />
    </CheckboxFilterButtonGroup>
  );
};

export default withStyles(styles)(StatusCheckboxInput);
