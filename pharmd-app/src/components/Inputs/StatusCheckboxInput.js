/**
 * Description:
 * This Component creates a group of status filter checkbox buttons.
 * When you click on an status checkbox it will filter the table for data with the
 *     selected status.
 *
 * Date: 02-18-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";

// Style Imports
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { STUDENT_STATUS } from "../../constants/apiObjects";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

// -------------------------- STYLE --------------------------
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

// -------------------------- COMPONENT --------------------------

const StatusCheckboxInput = ({
  checkedBoxes,
  className,
  classes,
  color,
  label,
  setCheckedBoxes,
  setFilter,
  ...props
}) => {
  const {
    meta: { error }
  } = useInput(props);

  let statusCheckedBoxes;
  let setStatusCheckedBoxes;

  // Contains a list of tuples: (String: value, String: label)
  const formControlLabels = [
    [STUDENT_STATUS.ENROLLED, "Enrolled"],
    [STUDENT_STATUS.COOP, "Co-op"],
    [STUDENT_STATUS.GRADUATED, "Graduated"],
    [STUDENT_STATUS.LEAVE, "Leave"],
    [STUDENT_STATUS.DROP_BACK, "Drop Back"]
  ];
  console.log(`Form control labels: ${formControlLabels}`);

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
    >
      {formControlLabels.map(([formControlValue, formControlLabel]) => {
        return (
          <FormControlLabel
            checked={statusCheckedBoxes.indexOf(formControlValue) >= 0}
            value={formControlValue}
            label={formControlLabel}
            onclick={createOnClick(formControlValue)}
            classes={{ label: classes.label }}
          />
        );
      })}
    </CheckboxFilterButtonGroup>
  );
};

export default withStyles(styles)(StatusCheckboxInput);
