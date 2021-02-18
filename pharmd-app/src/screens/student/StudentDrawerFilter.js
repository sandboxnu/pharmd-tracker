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
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "twin.macro";

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
  },
  // rangSlider styling
  rangeSlider: {
    margin: "2rem 0 0 0",
    width: 300,
    "& h4": {
      margin: "0 0 1.33em 0",
      color: "black",
      fontWeight: "650",
      fontSize: "1.1rem",
      fontFamily:
        "Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif",
      "& span": {
        color: blue[700],
        fontSize: "1rem"
      }
    }
  },
  // checkbox styling
  checkboxButton: {
    color: blue[700]
  }
}));

//-------------------------- COMPONENT --------------------------

const Filter = styled(FilterRA)`
  display: block;
`;

export const StudentDrawerFilter = ({ setFilters, filterValues, ...props }) => {
  const classes = useStyles();

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
      <StatusCheckboxInput
        label="Status"
        source="status"
        color="primary"
        className={classes.formControl}
        checkboxClassName={classes.checkboxButton}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <GpaSliderInput
        label="GPA"
        source="gpa_gte"
        className={classes.rangeSlider}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <CohortMultipleSelect
        label="Cohort"
        source="cohort"
        className={classes.formControl}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <OriginCheckboxInput
        label="Origin"
        source="international"
        className={classes.formControl}
        checkboxClassName={classes.originCheckboxButton}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
    </Filter>
  );
};

export default StudentDrawerFilter;
