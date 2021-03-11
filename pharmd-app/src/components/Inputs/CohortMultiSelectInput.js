// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import ClearIcon from '@material-ui/icons/Clear';
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Style Imports
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import tw from "twin.macro";
import Autocomplete from "../Basic/Autocomplete";
import MultipleSelect from "../Basic/MultiSelect";

// -------------------------- STYLE --------------------------

const styles = {
  // general formControl Styling
  root: {
    width: "100%",
    // style the border
    "& fieldset": {
      border: ".2rem solid #F0F4FF"
    }
  },

  input: {
    borderWidth: 2
  },

  tag: {
    backgroundColor: "#4573EE",
    color: "white",
    borderRadius: "7px"
  }
};

// -------------------------- COMPONENT --------------------------

const CohortMultipleSelect = ({ classes, className, label, setFilter, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  // setFilter (function) requires a list of values. Ex: ["15/20"]
  // Autocomplete will get an array of dict. Ex: [{label: "Cohort 22", value: "17/22"}]
  const cohortMultiSelect = (event, array) => {
    const values = [];
    array.forEach(dict => {
      values.push(dict.value);
    });
    setFilter("cohort[current]", values);
  };

  const cohortList = [
    { label: "Cohort 20", value: "15/20" },
    { label: "Cohort 22", value: "17/22" },
    { label: "Cohort 23", value: "18/23" },
    { label: "Cohort 24", value: "19/24" },
    { label: "Cohort 25", value: "20/25" }
  ];

  return (
    <div tw="w-full">
      <h4 tw="font-650 mb-0 mt-8 text-black text-1.1">{label}</h4>
      <Autocomplete
        className={classes.root}
        deleteIcon={<ClearIcon tw="text-white" />}
        inputClassName={classes.input}
        tagClassName={classes.tag}
        onChange={cohortMultiSelect}
        options={cohortList}
        placeholder="Add Item"
      />
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
    </div>
  );
};

export default withStyles(styles)(CohortMultipleSelect);
