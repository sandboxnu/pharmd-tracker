import React from "react";
import { useInput } from "react-admin";
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MultipleSelect from "../Basic/MultiSelect";

const StatusCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <MultipleSelect onChange={props.onChange} label={props.label} error={error}>
      <FormControlLabel value="15/20" label="15/20" />
      <FormControlLabel value="17/22" label="17/22" />
      <FormControlLabel value="18/23" label="18/23" />
      <FormControlLabel value="19/24" label="19/24" />
      <FormControlLabel value="20/25" label="20/25" />
    </MultipleSelect>
  );
};

export default StatusCheckboxInput;
