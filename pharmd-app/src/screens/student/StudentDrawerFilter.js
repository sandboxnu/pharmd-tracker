import React from "react";
import { Filter as FilterRA } from "react-admin";
import set from "lodash/set";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "twin.macro";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import OriginRadioInput from "../../components/Inputs/OriginRadioInput";
import StatusCheckboxInput from "../../components/Inputs/StatusCheckboxInput";
import CohortMultipleSelect from "../../components/Inputs/CohortMultiSelectInput";

const useStyles = makeStyles(theme => ({
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
  checkboxButton: {
    color: blue[700],
    "&$checked": {
      color: blue[700]
    }
  }
}));

const Filter = styled(FilterRA)`
  display: block;
`;

export const StudentDrawerFilter = props => {
  const classes = useStyles();

  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const deleteFilter = key => {
    delete props.filterValues[key];
    props.setFilters(props.filterValues);
  };

  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      const gpaMin = newValue[0];
      const gpaMax = newValue[1];
      setFilter("gpa_gte", gpaMin);
      setFilter("gpa_lte", gpaMax);
    }
  };

  const originRadio = (event, newValue) => {
    switch (newValue) {
      case "domestic":
        setFilter("international", false);
        break;
      case "international":
        setFilter("international", true);
        break;
      default:
        deleteFilter("international");
        break;
    }
  };

  const statusCheckbox = (event, array) => {
    setFilter("status", array);
  };

  const cohortMultiSelect = (event, array) => {
    setFilter("cohort[current]", array);
  };

  return (
    <Filter {...props}>
      <StatusCheckboxInput
        label="Status"
        source="status"
        onChange={statusCheckbox}
        color="primary"
        className={classes.formControl}
        checkboxClassName={classes.checkboxButton}
        alwaysOn
      />
      <GpaSliderInput
        label="GPA"
        source="gpa_gte"
        onChange={searchGpaRange}
        className={classes.rangeSlider}
        alwaysOn
      />
      <CohortMultipleSelect
        label="Cohort"
        source="cohort"
        onChange={cohortMultiSelect}
        className={classes.formControl}
        alwaysOn
      />
      <OriginRadioInput
        label="Origin"
        source="international"
        onChange={originRadio}
        className={classes.formControl}
        alwaysOn
      />
    </Filter>
  );
};

export default StudentDrawerFilter;
