import React from "react";
import { useInput } from "react-admin";
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MultipleSelect from "../Basic/MultiSelect";

const CohortMultipleSelect = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <MultipleSelect
      onChange={props.onChange}
      label={props.label}
      error={error}
      className={props.className}
    >
      <FormControlLabel value="15/20" label="Cohort 20" />
      <FormControlLabel value="17/22" label="Cohort 22" />
      <FormControlLabel value="18/23" label="Cohort 23" />
      <FormControlLabel value="19/24" label="Cohort 24" />
      <FormControlLabel value="20/25" label="Cohort 25" />
    </MultipleSelect>
  );
};

export default CohortMultipleSelect;
