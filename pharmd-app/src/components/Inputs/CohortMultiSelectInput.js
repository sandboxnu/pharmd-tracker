// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    // // style the border
    "& fieldset": {
      borderRadius: ".6rem",
      border: ".2rem solid #F0F4FF"
    },
    "&.Mui-focused fieldset": {
      border: ".2rem solid " + blue[700] + " !important"
    },
    "&:hover fieldset": {
      border: ".2rem solid " + blue[700] + " !important"
    }
  },

  // container element of toggle popper icon and remove all options icon
  endAdornment: {
    top: "9px"
  },

  // container element of options
  listbox: {
    // border: ".2rem solid #F0F4FF",
    border: ".2rem solid " + blue[700],
    borderRadius: ".6rem",
    marginTop: ".5rem",
    padding: 0
  },

  // container element of listbox
  paper: {
    boxShadow: "unset"
  },

  // styling for each option that a user can select within pop up
  option: {
    // styling when an option has been selected
    "&[aria-selected=true]": {
      backgroundColor: "#F0F4FF"
    },
    "&:hover": {
      backgroundColor: "#F0F4FF"
    }
  },

  tag: {
    backgroundColor: "#4573EE",
    color: "white",
    borderRadius: "7px",
    marginBottom: ".3rem",
    marginRight: ".3rem"
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

  // determines if an option (dictionary) has been selected based on its value
  const isCohortSelected = (option, value) => {
    // checks if these two dictionaries have a "value" key
    if (!("value" in option || "value" in value)) {
      return false;
    }

    return option.value === value.value;
  };

  const cohortList = [
    { label: "Cohort 20", value: "15/20" },
    { label: "Cohort 22", value: "17/22" },
    { label: "Cohort 23", value: "18/23" },
    { label: "Cohort 24", value: "19/24" },
    { label: "Cohort 25", value: "20/25" },
    { label: "Cohort 26", value: "20/26" },
    { label: "Cohort 26", value: "20/27" },
    { label: "Cohort 26", value: "20/28" },
    { label: "Cohort 26", value: "20/29" },
    { label: "Cohort 26", value: "20/31" },
    { label: "Cohort 26", value: "20/32" },
    { label: "Cohort 26", value: "20/33" },
    { label: "Cohort 26", value: "20/34" },
    { label: "Cohort 26", value: "20/35" }
  ];

  return (
    <div tw="w-full">
      <h4 tw="font-650 mb-0 mt-8 pb-4 text-black text-1.1">{label}</h4>
      <Autocomplete
        classes={classes}
        deleteIcon={<ClearIcon tw="text-white" />}
        inputClassName={classes.input}
        isOptionSelected={isCohortSelected}
        tagClassName={classes.tag}
        onChange={cohortMultiSelect}
        options={cohortList}
        popupIcon={<ExpandMoreIcon fontSize="large" tw="text-black" />}
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
