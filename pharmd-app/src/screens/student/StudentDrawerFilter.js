/**
 * Description:
 * This Component contains filter components that filter student data.
 * This Component will be located in a drawer.
 *
 * Date: 02-18-2021
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { Filter as FilterRA } from "react-admin";
import set from "lodash/set";

// Component Imports
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import StatusCheckboxInput from "../../components/Inputs/StatusCheckboxInput";
import CohortMultipleSelect from "../../components/Inputs/CohortMultiSelectInput";
import OriginCheckboxInput from "../../components/Inputs/OriginCheckboxInput";

// Style Imports
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "twin.macro";
import StudentDisplayFilters from "./StudentDisplayFilters";

//-------------------------- STYLE --------------------------

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

const Filter = styled(FilterRA)`
  display: block;
`;

//-------------------------- COMPONENT --------------------------

export const StudentDrawerFilter = ({ filterValues, setFilters, ...props }) => {
  const classes = useStyles();
  console.log("FILTER VALUES");
  console.log(filterValues);

  // onChange functions to modify ReactAdmin filter values
  const setFilter = (key, val) => {
    setFilters(set(filterValues, key, val));
  };

  const deleteFilter = key => {
    delete filterValues[key];
    setFilters(filterValues);
  };

  return (
    <Filter {...props}>
      <StudentDisplayFilters alwaysOn filterValues={filterValues} deleteFilter={deleteFilter} />
      <StatusCheckboxInput
        alwaysOn
        className={classes.formControl}
        color="primary"
        deleteFilter={deleteFilter}
        label="Status"
        setFilter={setFilter}
        source="status"
      />
      <GpaSliderInput
        alwaysOn
        deleteFilter={deleteFilter}
        label="GPA"
        setFilter={setFilter}
        source="gpa_gte"
      />
      <CohortMultipleSelect
        alwaysOn
        className={classes.formControl}
        deleteFilter={deleteFilter}
        label="Cohort"
        setFilter={setFilter}
        source="cohort"
      />
      <OriginCheckboxInput
        alwaysOn
        className={classes.formControl}
        deleteFilter={deleteFilter}
        label="Origin"
        setFilter={setFilter}
        source="international"
      />
    </Filter>
  );
};

export default StudentDrawerFilter;
