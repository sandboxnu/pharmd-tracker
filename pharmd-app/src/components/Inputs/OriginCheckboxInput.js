//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import { useInput } from "react-admin";

// Component Imports
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';

// Style Imports
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

//-------------------------- STYLE --------------------------

// Use this to style the form group in the checkboxButtonGroup to make the checkboxes
//     appear in a row.

// resource: https://github.com/mui-org/material-ui/issues/10820
// Use styles to make the label change when the checkbox is checked
const styles = {
  formGroup: {
    flexDirection: "row",
    marginTop: "1rem"
  },
  root: {
    border: ".2rem solid #F0F4FF",
    width: "7rem",
    borderRadius: ".51rem"
  },
  rootChecked: {
    border: ".2rem solid",
    borderColor: blue[700],
    width: "7rem",
    borderRadius: ".51rem"
  },
  checked: {
    // use the direct sibling selector to get the label
    "&, & + $label": {
      color: "#2B2B90"
    }
  },
  label: {
    color: "#828282",
    fontWeight: 600
  },
  icon: {
    width: 60,
    height: 60
  }
};

//-------------------------- COMPONENT --------------------------

const OriginCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const { className, classes, label, setFilter, deleteFilter } = props;

  const [isInternational, setIsInternational] = useState({});

  const addOriginFilter = newValue => {
    switch (newValue) {
      case "domestic":
        setFilter("international", false);
        setIsInternational({"international": false});
        break;
      case "international":
        setFilter("international", true);
        setIsInternational({"international": true});
        break;
      default:
        deleteFilter("international");
        setIsInternational({});
        break;
    }
  };

  const removeOriginFilter = () => {
    deleteFilter("international");
    setIsInternational({});
  };

  const originCheckbox = (event, array) => {
    array.length === 1 ? addOriginFilter(array[0]) : removeOriginFilter();
  };

  return (
    <CheckboxFilterButtonGroup
      onChange={originCheckbox}
      label={label}
      color="#2B2B90"
      error={error}
      className={className}
      checkboxClassName={classes.checked}
      formGroupClassName={classes.formGroup}
    >
      <FormControlLabel
        value="domestic"
        label="Domestic"
        icon={<DirectionsCarOutlinedIcon fontSize="large" />}
        checkedIcon={<DirectionsCarIcon fontSize="large" />}
        labelPlacement="bottom"
        classes={
          "international" in isInternational && !isInternational["international"] ?
            {
              root: classes.rootChecked,
              label: classes.label
            }
            : {
                root: classes.root,
                label: classes.label,
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
          "international" in isInternational && isInternational["international"] ?
            {
              root: classes.rootChecked,
              label: classes.label
            }
            : {
              root: classes.root,
              label: classes.label,
            }
        }
      />
    </CheckboxFilterButtonGroup>
  );
};

export default withStyles(styles)(OriginCheckboxInput);
