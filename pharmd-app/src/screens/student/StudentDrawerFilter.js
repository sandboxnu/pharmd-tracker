/**
 * Description:
 * This Component contains filter components that filter student data.
 * This Component will be located in a drawer.
 *
 * Date: 02-18-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import { Filter as FilterRA } from "react-admin";
import set from "lodash/set";

// Component Imports
import CohortMultipleSelect from "../../components/Inputs/CohortMultiSelectInput";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import OriginCheckboxInput from "../../components/Inputs/OriginCheckboxInput";
import StatusCheckboxInput from "../../components/Inputs/StatusCheckboxInput";
import StudentDisplayFilters from "./StudentDisplayFilters";

// Style Imports
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "twin.macro";

// -------------------------- STYLE --------------------------

// Use this to style components within a filter

const useStyles = makeStyles(theme => ({
  // general formControl Styling
  formControl: {
    margin: "2rem 0 0 0",
    "& legend": {
      color: "black",
      fontWeight: "650",
      fontSize: "1.1rem",
      fontFamily:
        "Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif"
    }
  }
}));
// Checkbox styling

const Filter = styled(FilterRA)`
  display: block;
`;
// -------------------------- COMPONENT --------------------------

export const StudentDrawerFilter = ({ filterValues, setFilters, ...props }) => {
  const classes = useStyles();

  // onChange functions to modify ReactAdmin filter values
  const setFilter = (key, val) => {
    setFilters(set(filterValues, key, val));
  };

  const deleteFilter = key => {
    delete filterValues[key];
    setFilters(filterValues);
  };

  // used to keep track of the international filter to change the style of the
  //     label to have a border when the checkbox is selected.
  const [statusCheckedLabels, setStatusCheckedLabels] = useState([]);

  // used to keep track of the GPA range values
  const [rangeValue, setRangeValue] = React.useState([0, 4]);

  // Autocomplete state values
  // the state to keep track of text that is typed into the input text field
  const [autocompleteInputValue, setAutocompleteInputValue] = useState("");
  // the state the keep track of the options that have been selected (this is an array object)
  const [autocompleteValue, setAutocompleteValue] = useState([]);

  // used to keep track of the international filter to change the style of the
  //     label to have a border when the checkbox is selected.
  const [originCheckedLabels, setOriginCheckedLabels] = useState([]);

  return (
    <div tw="justify-center flex">
      <Filter {...props}>
        <StudentDisplayFilters
          alwaysOn
          deleteFilter={deleteFilter}
          filterValues={filterValues}
          originCheckedLabels={originCheckedLabels}
          rangeValue={rangeValue}
          setAutocompleteInputValue={setAutocompleteInputValue}
          setAutocompleteValue={setAutocompleteValue}
          setFilter={setFilter}
          setOriginCheckedLabels={setOriginCheckedLabels}
          setRangeValue={setRangeValue}
          setStatusCheckedLabels={setStatusCheckedLabels}
        />
        <StatusCheckboxInput
          alwaysOn
          checkedBoxes={statusCheckedLabels}
          className={classes.formControl}
          color="primary"
          deleteFilter={deleteFilter}
          label="Status"
          setCheckedBoxes={setStatusCheckedLabels}
          setFilter={setFilter}
          source="status"
        />
        <GpaSliderInput
          alwaysOn
          deleteFilter={deleteFilter}
          label="GPA"
          setFilter={setFilter}
          source="gpa"
          value={rangeValue}
          setValue={setRangeValue}
        />
        <CohortMultipleSelect
          alwaysOn
          className={classes.formControl}
          deleteFilter={deleteFilter}
          inputValue={autocompleteInputValue}
          label="Cohort"
          setFilter={setFilter}
          setInputValue={setAutocompleteInputValue}
          setValue={setAutocompleteValue}
          source="gradDate"
          value={autocompleteValue}
        />
        <OriginCheckboxInput
          alwaysOn
          checkedBoxes={originCheckedLabels}
          className={classes.formControl}
          deleteFilter={deleteFilter}
          label="Origin"
          setCheckedBoxes={setOriginCheckedLabels}
          setFilter={setFilter}
          source="hasVisa"
        />
      </Filter>
    </div>
  );
};

export default StudentDrawerFilter;
