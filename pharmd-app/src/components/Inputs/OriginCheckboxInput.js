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

//-------------------------- COMPONENT --------------------------

const OriginCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const addOriginFilter = (newValue) => {
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
      checkboxClassName={props.checkboxClassName}
    >
      <FormControlLabel value="domestic" label="Domestic" icon={ <DirectionsCarOutlinedIcon/> } checkedIcon={ <DirectionsCarIcon/> } />
      <FormControlLabel value="international" label="International" icon={ <FlightOutlinedIcon/> } />
    </CheckboxFilterButtonGroup>
  );
};

export default OriginCheckboxInput;
