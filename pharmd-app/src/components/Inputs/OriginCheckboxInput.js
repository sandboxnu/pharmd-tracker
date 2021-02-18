// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';

// Style Imports
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";

// -------------------------- STYLE --------------------------
// resource: https://github.com/mui-org/material-ui/issues/10820
// Use styles to make the label change when the checkbox is checked
//     and to style components.
const styles = {
  // style the formgGroup
  formGroup: {
    flexDirection: "row",
    marginTop: "1rem"
  },

  // style label component

  // unchecked style
  labelRoot: {
    border: ".2rem solid #F0F4FF",
    width: "7rem",
    borderRadius: ".51rem"
  },

  // checked style
  labelRootChecked: {
    border: ".2rem solid",
    borderColor: blue[700],
    width: "7rem",
    borderRadius: ".51rem"
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
    width: 60,
    height: 60
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

  const { className, classes, label, setFilter, deleteFilter } = props;

  // used to keep track of the international filter to change the style of the
  //     label to have a border when the checkbox is selected.
  const [checkedLabels, setCheckedLabels] = useState([]);

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

  const originCheckbox = (event, array) => {
    // change local checkedLabels
    setCheckedLabels(array);

    // change reactAdmin filter values
    array.length === 1 ? addOriginFilter(array[0]) : removeOriginFilter();
  };

  return (
    <CheckboxFilterButtonGroup
      onChange={originCheckbox}
      label={label}
      color="#2B2B90"
      error={error}
      className={className}
      checkboxCheckedClass={classes.checkboxChecked}
      formGroupClassName={classes.formGroup}
    >
      <FormControlLabel
        value="domestic"
        label="Domestic"
        icon={<DirectionsCarOutlinedIcon fontSize="large" />}
        checkedIcon={<DirectionsCarIcon fontSize="large" />}
        labelPlacement="bottom"
        classes={
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
        value="international"
        label="International"
        icon={<FlightOutlinedIcon fontSize="large" />}
        checkedIcon={<FlightOutlinedIcon fontSize="large" />}
        labelPlacement="bottom"
        classes={
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
