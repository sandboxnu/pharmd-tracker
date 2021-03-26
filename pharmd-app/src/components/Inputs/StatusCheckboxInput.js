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
import { blue } from "@material-ui/core/colors";

//-------------------------- STYLE --------------------------
// Use styles to make the label change when the checkbox is checked
const styles = {
  checked: {
    // when the checkbox is checked change the fontweight of the label
    "&, & + $label": {
      fontWeight: 600
    }
  },

  // checkbox styling
  checkboxButton: {
    color: blue[700]
  },

  // follow the uniformity: make the label 16px away from the filter
  formGroup: {
    paddingTop: "7px"
  }
};

//-------------------------- COMPONENT --------------------------

const StatusCheckboxInput = ({ checkedBoxes, className, classes, color, label, setCheckedBoxes, setFilter,  ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  let statusCheckedBoxes;
  let setStatusCheckedBoxes;

  if (checkedBoxes == null || setCheckedBoxes == null) {
    // Values were not given
    [statusCheckedBoxes, setStatusCheckedBoxes] = React.useState([min, max]);
  } else {
    // use the variables givens
    statusCheckedBoxes = checkedBoxes;
    setStatusCheckedBoxes = setCheckedBoxes;
  }

  // Return a function that accepts an event
  const createOnClick = item => {
    return e => {
      const index = statusCheckedBoxes.indexOf(item);
      const newCheckedBoxes = [...statusCheckedBoxes];
      if (index < 0) {
        // item is not in the list
        newCheckedBoxes.push(item);
      } else {
        // item is already in the list - remove it
        newCheckedBoxes.splice(index, 1);
      }

      // after getting the updated list add / remove filters
      if (newCheckedBoxes.length === 5) {
        // all of the checkboxes are checked
        setFilter("status", []);
      } else {
        setFilter("status", newCheckedBoxes);
      }

      setStatusCheckedBoxes(newCheckedBoxes);
    };
  };

  return (
    <CheckboxFilterButtonGroup
      checkboxCheckedClass={classes.checked}
      checkboxClassName={classes.checkboxButton}
      className={className}
      formGroupClassName={classes.formGroup}
      color={color}
      error={error}
      label={label}
      // onChange={onChange}
    >
      <FormControlLabel
        checked={statusCheckedBoxes.indexOf("enrolled") >= 0}
        value="enrolled"
        label="Enrolled"
        onclick={createOnClick("enrolled")}
        classes={{ label: classes.label }}
      />
      <FormControlLabel
        checked={statusCheckedBoxes.indexOf("coop") >= 0}
        value="coop"
        label="Coop"
        onclick={createOnClick("coop")}
        classes={{ label: classes.label }}
      />
      <FormControlLabel
        checked={statusCheckedBoxes.indexOf("graduated") >= 0}
        value="graduated"
        label="Graduated"
        onclick={createOnClick("graduated")}
        classes={{ label: classes.label }}
      />
      <FormControlLabel
        checked={statusCheckedBoxes.indexOf("leave") >= 0}
        value="leave"
        label="Leave"
        onclick={createOnClick("leave")}
        classes={{ label: classes.label }}
      />
      <FormControlLabel
        checked={statusCheckedBoxes.indexOf("dropback") >= 0}
        value="dropback"
        label="Drop Back"
        onclick={createOnClick("dropback")}
        classes={{ label: classes.label }}
      />
    </CheckboxFilterButtonGroup>
  );
};

export default withStyles(styles)(StatusCheckboxInput);
