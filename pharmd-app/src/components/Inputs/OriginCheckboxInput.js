/**
 * Description:
 * This Component creates a group of origin filter checkbox buttons.
 * When you click on an origin checkbox it will filter the table for data with the
 *     selected origin.
 *
 * Date: 02-18-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";

// Style Imports
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

// -------------------------- STYLE --------------------------
// resource: https://github.com/mui-org/material-ui/issues/10820
// Use styles to make the label change when the checkbox is checked
//     and to style components.
const styles = {
  // style the formGroup
  formGroup: {
    flexDirection: "row",
    marginTop: "1rem"
  },

  // unchecked style
  labelRoot: {
    border: ".2rem solid #F0F4FF",
    borderRadius: ".51rem",
    width: "7rem"
  },

  // checked style
  labelRootChecked: {
    border: ".2rem solid",
    borderColor: blue[700],
    borderRadius: ".51rem",
    width: "7rem"
  },

  // style checkbox component
  checkboxChecked: {
    // use the direct sibling selector to get the label and change the label's color
    //     and the icon's color
    "&, & + $label": {
      color: "#2B2B90"
    }
  },

  // style icon for the checkbox
  icon: {
    height: 60,
    width: 60
  },

  // style label component
  label: {
    color: "#828282",
    fontWeight: 600
  }
};

// -------------------------- COMPONENT --------------------------

const OriginCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const { checkedLabels, className, classes, deleteFilter, label, setCheckedLabels, setFilter } = props;

  // used to keep track of the international filter to change the style of the
  //     label to have a border when the checkbox is selected.
  // const [checkedLabels, setCheckedLabels] = useState([]);

  // If both filters are selected, then remove the filter
  const addOriginFilter = newValue => {
    switch (newValue) {
      case "domestic":
        setFilter("international", false);
        break;
      case "international":
        setFilter("international", true);
        break;
      default:
        deleteFilter("international");
        break;
    }
  };

  const removeOriginFilter = () => {
    deleteFilter("international");
  };

  // Return a function that accepts an event
  const createOnClick = item => {
    return e => {
      const index = checkedLabels.indexOf(item);
      const newCheckedLabels = [...checkedLabels];
      if (index < 0) {
        // add the item
        newCheckedLabels.push(item);
      } else {
        // remove the item
        newCheckedLabels.splice(index, 1);
      }

      if (newCheckedLabels.length === 1) {
        addOriginFilter(item);
      } else {
        removeOriginFilter();
      }

      setCheckedLabels(newCheckedLabels);
    };
  };

  return (
    <CheckboxFilterButtonGroup
      checkboxCheckedClass={classes.checkboxChecked}
      className={className}
      color="#2B2B90"
      error={error}
      formGroupClassName={classes.formGroup}
      label={label}
    >
      <FormControlLabel
        checked={checkedLabels.indexOf("domestic") >= 0}
        value="domestic"
        label="Domestic"
        icon={<DirectionsCarOutlinedIcon fontSize="large" />}
        checkedIcon={<DirectionsCarIcon fontSize="large" />}
        labelPlacement="bottom"
        // adding onClick function to this FormControlLabel causes bugs where onClick is executed several times
        onclick={createOnClick("domestic")}
        classes={
          // if this label has been checked, change styling
          checkedLabels.indexOf("domestic") > -1
            ? {
                root: classes.labelRootChecked,
                label: classes.label
              }
            : {
                root: classes.labelRoot,
                label: classes.label
              }
        }
      />
      <FormControlLabel
        checked={checkedLabels.indexOf("international") >= 0}
        value="international"
        label="International"
        icon={<FlightOutlinedIcon fontSize="large" />}
        checkedIcon={<FlightOutlinedIcon fontSize="large" />}
        labelPlacement="bottom"
        onclick={createOnClick("international")}
        classes={
          // if this label has been checked, change styling
          checkedLabels.indexOf("international") > -1
            ? {
                root: classes.labelRootChecked,
                label: classes.label
              }
            : {
                root: classes.labelRoot,
                label: classes.label
              }
        }
      />
    </CheckboxFilterButtonGroup>
  );
};

export default withStyles(styles)(OriginCheckboxInput);
