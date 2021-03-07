//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MultipleSelect from "../Basic/MultiSelect";
import Autocomplete from "../Basic/Autocomplete";

// Style Imports
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import tw from "twin.macro";


const useStyles = makeStyles(theme => ({
  // general formControl Styling
  root: {
    margin: "2rem 0 0 0",
    width: "100%",
    "& MuiAutocomplete-groupLabel": {
      color: "black",
      fontWeight: "650",
      fontSize: "1.1rem",
      fontFamily:
        "Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif"
    }
  }
}));

//-------------------------- COMPONENT --------------------------

const CohortMultipleSelect = ({ className, label, setFilter, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  const classes = useStyles();

  // requires a list of values. Ex: ["15/20"]
  // Autocomplete will get an array of dict. Ex: [{label: "Cohort 22", value: "17/22"}]
  const cohortMultiSelect = (event, array) => {
    console.log("HELLO");
    console.log(array);
    const values = [];
    array.forEach(dict => {
      values.push(dict.value);
    });
    console.log(values);
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
      <h4>{label}</h4>
      <Autocomplete
        className={classes.root}
        onChange={cohortMultiSelect}
        options={cohortList}
        placeholder="Add Item"
      />
    </div>
  );
  // return (
  //   <div tw="w-full">
  //     <Autocomplete
  //       className={classes.root}
  //       label={label}
  //       onChange={cohortMultiSelect}
  //       options={cohortList}
  //       placeholder="Add Item"
  //     />
  //     <MultipleSelect
  //       onChange={cohortMultiSelect}
  //       label={label}
  //       error={error}
  //       className={className}
  //     >
  //       <FormControlLabel value="15/20" label="Cohort 20" />
  //       <FormControlLabel value="17/22" label="Cohort 22" />
  //       <FormControlLabel value="18/23" label="Cohort 23" />
  //       <FormControlLabel value="19/24" label="Cohort 24" />
  //       <FormControlLabel value="20/25" label="Cohort 25" />
  //     </MultipleSelect>
  //   </div>
  // );
};

export default CohortMultipleSelect;
