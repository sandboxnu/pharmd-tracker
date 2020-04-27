import React from "react";
import { Filter, NumberInput } from "react-admin";
import GpaSliderInput from "../../components/Inputs/GpaSliderInput";
import set from "lodash/set";
import OriginRadioInput from "../../components/Inputs/OriginRadioInput";

export const StudentDrawerFilter = props => {
  console.log("FILTER DRAWER PROPS", props);

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

  return (
    <Filter {...props}>
      {/* <NumberInput label="Min GPA" source={"gpa_gte"} alwaysOn /> */}
      {/* <NumberInput label="Max GPA" source={"gpa_lte"} alwaysOn /> */}
      <OriginRadioInput
        label="Origin"
        source={"international"}
        onChange={originRadio}
        alwaysOn
      />
      <GpaSliderInput label="GPA" source={"gpa_gte"} onChange={searchGpaRange} alwaysOn />
    </Filter>
  );
};

export default StudentDrawerFilter;
