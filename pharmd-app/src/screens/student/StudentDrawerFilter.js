import React from "react";
import { Filter, NumberInput } from "react-admin";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import set from "lodash/set";

export const StudentDrawerFilter = props => {
  console.log("FILTER DRAWER PROPS", props);

  const setFilter = (key, val) => {
    props.setFilters(set(props.filterValues, key, val));
  };

  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      let gpaMin = newValue[0];
      let gpaMax = newValue[1];
      setFilter("gpa_gte", gpaMin);
      setFilter("gpa_lte", gpaMax);
    }
  };

  return (
    <Filter {...props}>
      {/* <NumberInput label="Min GPA" source={"gpa_gte"} alwaysOn /> */}
      {/* <NumberInput label="Max GPA" source={"gpa_lte"} alwaysOn /> */}
      <GpaSliderInput label="GPA" source={"gpa_gte"} onChange={searchGpaRange} alwaysOn />
    </Filter>
  );
};

export default StudentDrawerFilter;
