/**
 * Description:
 * Component manaages table toolbar filters.
 * Currently we only display a seaarh filter.
 * TODO:
 *        - Add more filters if needed: A filter can be added
 *          as a child of <Filter/> and might require a custom
 *          onChange and parse filter function to communicate with the api.
 * Date: 04-24-2020
 */
// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import set from "lodash/set";

// Component Imports
import { Filter } from "react-admin";
import StudentSearchInput from "../../components/Inputs/StudentSearchInput";
import { STUDENT } from "../../constants/apiObjects";

const STUDENT_NAME_QUERY = `${STUDENT.NAME}_like`;
const STUDENT_ID_QUERY = `${STUDENT.NEU_ID}_like`;

// -------------------------- COMPONENT --------------------------

export const StudentFilter = props => {
  // Adds given filter key and value to the redux state filters
  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  // Fuunction that manages how a student is searched based on input event
  const searchStudent = event => {
    const val = event.target.value;
    if (val === "") {
      delete props.filterValues[STUDENT_NAME_QUERY];
      delete props.filterValues[STUDENT_ID_QUERY];
      props.setFilters(props.filterValues);
    } else {
      setFilter(
        isNaN(val) ? STUDENT_NAME_QUERY : STUDENT_ID_QUERY,
        isNaN(val) ? val : `^${val}`
      );
    }
  };

  return (
    <Filter {...props}>
      <StudentSearchInput
        label="Search Student"
        source={STUDENT_NAME_QUERY}
        parse={inputValue => `^${inputValue}`} // Regex parameter for start with
        onChange={searchStudent}
        alwaysOn
      />
    </Filter>
  );
};
