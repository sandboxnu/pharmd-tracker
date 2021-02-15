//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import CheckboxFilterButtonGroup from "../Basic/Checkbox Controls/CheckboxFilterButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';

// Style Imports
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

//-------------------------- STYLE --------------------------

// Use this to style the form group in the checkboxButtonGroup to make the checkboxes
//     appear in a row.
const useStyles = makeStyles({
  // formGroup styling
  formGroup: {
    flexDirection: "row",
    // style the
    "& label": {
      border: ".2rem solid #F0F4FF",
      width: "6rem",
      borderRadius: ".51rem"
    }
  },

  formControlLabel: {
    backgroundColor: "red",
    "&$checked": {
      borderColor: blue[700],
      color: blue[700]
    }
  },

  // checkbox styling
  checkboxButton: {
    "&$checked": {
      borderColor: blue[700],
      color: blue[700]
    }
  }
});

//-------------------------- COMPONENT --------------------------

const OriginCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const classes = useStyles();

  const addOriginFilter = newValue => {
    switch (newValue) {
      case "domestic":
        props.setFilter("international", false);
        break;
      case "international":
        props.setFilter("international", true);
        break;
      default:
        props.deleteFilter("international");
        break;
    }
    console.log("Origin Filter:", newValue);
  };

  const originCheckbox = (event, array) => {
    array.length === 1 ?
      addOriginFilter(array[0])
      : props.deleteFilter("international");
  };

  return (
    <CheckboxFilterButtonGroup
      onChange={originCheckbox}
      label={props.label}
      color={props.color}
      error={error}
      className={props.className}
      checkboxClassName={classes.checkboxButton}
      formGroupClassName={classes.formGroup}
    >
      <FormControlLabel
        value="domestic"
        label="Domestic"
        icon={ <DirectionsCarOutlinedIcon/> }
        checkedIcon={ <DirectionsCarIcon/> }
        labelPlacement="bottom"
        className={classes.formControlLabel}
      />
      <FormControlLabel
        value="international"
        label="International"
        icon={ <FlightOutlinedIcon/> }
        labelPlacement="bottom"
        className={classes.formControlLabel}
      />
    </CheckboxFilterButtonGroup>
  );
};

export default OriginCheckboxInput;
