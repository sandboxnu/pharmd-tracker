// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import set from "lodash/set";
// Component Imports
import { Filter } from "react-admin";
import StudentSearchInput from "../../components/Inputs/StudentSearchInput";
import { COURSE } from "../../constants/apiObjects";

// -------------------------- CONSTANTS --------------------------

const COURSE_SUBJECT_QUERY = `${COURSE.SUBJECT}_like`;
const COURSE_NUMBER_QUERY = `${COURSE.NUMBER}_like`;
const COURSE_NAME_QUERY = `${COURSE.NAME}_like`;

// -------------------------- COMPONENT --------------------------

export const CourseFilter = props => {
  // Adds given filter key and value to the redux state filters
  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const searchCourse = event => {
    // TODO: implement search here
  };

  return (
    <Filter {...props}>
      <StudentSearchInput
        label="Search Course"
        source={COURSE_NAME_QUERY}
        parse={inputValue => `^${inputValue}`} // Regex parameter for start with
        onChange={searchCourse}
        alwaysOn
      />
    </Filter>
  );
};
