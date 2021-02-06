//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

//-------------------------- COMPONENT --------------------------

const OriginCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <CheckboxButtonGroup
      onChange={props.onChange}
      label={props.label}
      color={props.color}
      error={error}
      className={props.className}
      checkboxClassName={props.checkboxClassName}
    >
      <FormControlLabel value="domestic" label="Domestic" icon={ <FavoriteBorderIcon/> } />
      <FormControlLabel value="international" label="International"  />
    </CheckboxButtonGroup>
  );
};

export default OriginCheckboxInput;
