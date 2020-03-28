import React from "react";
import { Filter } from "react-admin";
import { useListParams } from "ra-core";
import set from "lodash/set";
import StudentSearchInput from "../../components/Inputs/StudentSearchInput";

export const StudentFilter = props => {
  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const searchStudent = event => {
    let val = event.target.value;
    if (val === "") {
      delete props.filterValues["name_like"];
      delete props.filterValues["neu_id_like"];
      props.setFilters(props.filterValues);
    } else {
      setFilter(isNaN(val) ? "name_like" : "neu_id_like", `^${val}`);
    }
  };

  return (
    <Filter {...props}>
      <StudentSearchInput
        label="Search Student"
        source={"name_like"}
        parse={inputValue => `^${inputValue}`}
        onChange={searchStudent}
        alwaysOn
      />
    </Filter>
  );
};
