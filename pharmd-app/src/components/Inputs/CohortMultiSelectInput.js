import React from "react";
import { useInput } from "react-admin";
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
      <FormControlLabel value="2020" label="Cohort 20" />
      <FormControlLabel value="2022" label="Cohort 22" />
      <FormControlLabel value="2023" label="Cohort 23" />
      <FormControlLabel value="2024" label="Cohort 24" />
      <FormControlLabel value="2525" label="Cohort 25" />
    </MultipleSelect>
  );
};

export default CohortMultipleSelect;
