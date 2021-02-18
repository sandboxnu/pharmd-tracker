/**
 * Description:
 * This Component creates a group of status filter checkbox buttons.
 * When you click on an status checkbox it will filter the table for data with the
 *     selected status.
 *
 * Date: 02-18-2021
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

// Style Imports
import { withStyles } from "@material-ui/core/styles";

//-------------------------- STYLE --------------------------
// Use styles to make the label change when the checkbox is checked
const styles = {
  checked: {
    // when the checkbox is checked change the fontweight of the label
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

  const onChange = (event, array) => {
    setFilter("status", array);
  };

  return (
    <CheckboxFilterButtonGroup
      checkboxCheckedClass={classes.checked}
      checkboxClassName={checkboxClassName}
      className={className}
      color={color}
      error={error}
      label={label}
      onChange={onChange}
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
