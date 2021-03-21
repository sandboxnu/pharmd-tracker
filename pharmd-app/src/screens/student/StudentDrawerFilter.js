import React from "react";
import { Filter as FilterRA, NumberInput } from "react-admin";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import set from "lodash/set";
import OriginRadioInput from "../../components/Inputs/OriginRadioInput";
import StatusCheckboxInput from "../../components/Inputs/StatusCheckboxInput";
import MultipleSelect from "../../components/Basic/MultiSelect";
import CohortMultipleSelect from "../../components/Inputs/CohortMultiSelectInput";
import CheckboxButton from "../../components/Basic/Checkbox Controls/CheckboxButton";
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { styled } from "twin.macro";

// Use this to style components within a filter

const useStyles = makeStyles((theme) => ({
  // general formControl Styling
  formControl: {
    margin: '2rem 0 0 0',
    '& legend': {
      color: 'black',
      fontWeight: '650',
      fontSize: '1.1rem',
      fontFamily: 'Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif',
    },
  },
  // rangSlider styling
  rangeSlider: {
    margin: '2rem 0 0 0',
    width: 300,
    '& h4': {
      margin: '0 0 1.33em 0',
      color: 'black',
      fontWeight: '650',
      fontSize: '1.1rem',
      fontFamily: 'Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif',
      '& span': {
        color: blue[700],
        fontSize: '1rem',
      }
    },
  },
  // checkbox styling
  checkboxButton: {
    color: blue[700],
    '&$checked': {
      color: blue[700],
    },
  },
}));
// Checkbox styling

const Filter = styled(FilterRA)`
  display: block;
` ;

export const StudentDrawerFilter = props => {
  console.log("FILTER DRAWER PROPS", props.filterValues);

  const classes = useStyles();

  // onChange functions
  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const deleteFilter = key => {
    delete props.filterValues[key];
    props.setFilters(props.filterValues);
  };

  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      let gpaMin = newValue[0];
      let gpaMax = newValue[1];
      setFilter("gpa", [gpaMin, gpaMax]);
    }
  };

  const originRadio = (event, newValue) => {
    switch (newValue) {
      case "domestic":
        setFilter("hasVisa", false);
        break;
      case "international":
        setFilter("hasVisa", true);
        break;
      default:
        deleteFilter("hasVisa");
        break;
    }
    console.log("Origin Filter:", newValue);
  };

  const statusCheckbox = (event, array) => {
    setFilter("status", array);
    console.log("Status Filter:", array);
  };

  const cohortMultiSelect = (event, array) => {
    setFilter("gradDate", array);
    console.log("Cohort Filter: ", array);
  };

  return (
    <Filter {...props}>
      {/* <NumberInput label="Min GPA" source={"gpa_gte"} alwaysOn /> */}
      {/* <NumberInput label="Max GPA" source={"gpa_lte"} alwaysOn /> */}

      <StatusCheckboxInput
        label="Status"
        source={"status"}
        onChange={statusCheckbox}
        color="primary"
        className={classes.formControl}
        checkboxClassName={classes.checkboxButton}
        alwaysOn
      />
      <GpaSliderInput
        label="GPA"
        source={"gpa"}
        onChange={searchGpaRange}
        className={classes.rangeSlider}
        alwaysOn
      />
      <CohortMultipleSelect
        label="Cohort"
        source={"gradDate"}
        onChange={cohortMultiSelect}
        className={classes.formControl}
        alwaysOn
      />
      <OriginRadioInput
        label="Origin"
        source={"hasVisa"}
        onChange={originRadio}
        className={classes.formControl}
        alwaysOn
      />
    </Filter>
  );
};

export default StudentDrawerFilter;
