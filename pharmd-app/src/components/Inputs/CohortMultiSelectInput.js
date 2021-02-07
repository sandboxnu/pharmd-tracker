//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MultipleSelect from "../Basic/MultiSelect";

//-------------------------- COMPONENT --------------------------

const CohortMultipleSelect = ({ className, label, setFilter, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  const cohortMultiSelect = (event, array) => {
    setFilter("cohort[current]", array);
  };

  return (
    <MultipleSelect
      onChange={cohortMultiSelect}
      label={label}
      error={error}
      className={className}
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
