/**
 * Description:
 * This Component creates a multi select drop down / text input to filter Student data based on GPA.
 * This component also allows the user to type in the option they are looking for to filter the options.
 *
 * Date: 03-18-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Style Imports
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "../Basic/Autocomplete";
import tw from "twin.macro";

// -------------------------- STYLE --------------------------

const styles = {
  // style the general formControl Styling
  root: {
    width: "100%",
    // style the default border color and size
    "& fieldset": {
      borderRadius: ".6rem",
      border: ".2rem solid #F0F4FF"
    },
    // style the border color and size when user focuses (clicks on) the filter component
    "&.Mui-focused fieldset": {
      border: ".2rem solid " + blue[700] + " !important"
    },
    // style the border color and size when user hovers over the filter component
    "&:hover fieldset": {
      border: ".2rem solid " + blue[700] + " !important"
    }
  },

  // style the container element of toggle popper icon and remove all options icon
  endAdornment: {
    top: "9px"
  },

  // style the container element of options
  listbox: {
    border: ".2rem solid " + blue[700],
    borderRadius: ".6rem",
    marginTop: ".5rem",
    padding: 0
  },

  // style the container element of listbox (remove the shadow)
  paper: {
    boxShadow: "unset"
  },

  // styling for each option that a user can select within pop up
  option: {
    // styling when an option has been selected
    "&[aria-selected=true]": {
      backgroundColor: "#F0F4FF"
    },
    // styling when an option is hovered on
    "&:hover": {
      backgroundColor: "#F0F4FF"
    }
  },

  // styling for the no options div that shows up when there are no options that match
  //     the user's input
  noOptions: {
    border: ".2rem solid " + blue[700],
    borderRadius: ".6rem",
    marginTop: ".5rem",

    // match the default padding on the options
    paddingTop: "6px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "6px"
  },

  // style the tags (pills) or options that have been selected in the input field
  tag: {
    backgroundColor: "#4573EE",
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

    // checks if these two dictionaries have the same value (no two options should have the
    //     same value
    return option.value === value.value;
  };

  const cohortList = [
    { label: "Cohort 20", value: "15/20" },
    { label: "Cohort 22", value: "17/22" },
    { label: "Cohort 23", value: "18/23" },
    { label: "Cohort 24", value: "19/24" },
    { label: "Cohort 25", value: "20/25" },
    { label: "Cohort 26", value: "20/26" }
  ];

  return (
    <div tw="w-full">
      <h4 tw="font-650 mb-0 mt-8 pb-4 text-black text-1.1">{label}</h4>
      <Autocomplete
        classes={classes}
        inputClassName={classes.input}
        isOptionSelected={isCohortSelected}
        tagClassName={classes.tag}
        onChange={cohortMultiSelect}
        options={cohortList}
        popupIcon={<ExpandMoreIcon fontSize="large" tw="text-black" />}
        placeholder="Add Item"
      />
    </div>
  );
};

export default withStyles(styles)(CohortMultipleSelect);
