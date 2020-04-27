import React from "react";
import { useInput } from "react-admin";
import RadioButtonsGroup from "../Basic/Radio Controls/RadioButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const OriginRadioInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <RadioButtonsGroup onChange={props.onChange} label={props.label} error={error}>
      <FormControlLabel value="all" label="All" />
      <FormControlLabel value="domestic" label="Domestic" />
      <FormControlLabel value="international" label="International" />
    </RadioButtonsGroup>
  );
};

export default OriginRadioInput;
