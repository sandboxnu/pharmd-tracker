import React from "react";
import { Filter as FilterRA, NumberInput } from "react-admin";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import set from "lodash/set";
import StatusCheckboxInput from "../../components/Inputs/StatusCheckboxInput";
import CohortMultipleSelect from "../../components/Inputs/CohortMultiSelectInput";
import OriginCheckboxInput from "../../components/Inputs/OriginCheckboxInput";
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

  const classes = useStyles();

  // onChange functions
  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const deleteFilter = key => {
    delete props.filterValues[key];
    props.setFilters(props.filterValues);
  };

  return (
    <Filter {...props}>
      <StatusCheckboxInput
        label="Status"
        source={"status"}
        color="primary"
        className={classes.formControl}
        checkboxClassName={classes.checkboxButton}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <GpaSliderInput
        label="GPA"
        source={"gpa_gte"}
        className={classes.rangeSlider}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <CohortMultipleSelect
        label="Cohort"
        source={"cohort"}
        className={classes.formControl}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
      <OriginCheckboxInput
        label="Origin"
        source={"international"}
        color="primary"
        className={classes.formControl}
        checkboxClassName={classes.checkboxButton}
        setFilter={setFilter}
        deleteFilter={deleteFilter}
        alwaysOn
      />
    </Filter>
  );
};

export default StudentDrawerFilter;
