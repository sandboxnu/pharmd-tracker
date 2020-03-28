import React from "react";
import { Filter, NumberInput } from "react-admin";

export const StudentDrawerFilter = props => {
  console.log("FILTER DRAWER PROPS", props);

  return (
    <Filter {...props}>
      <NumberInput label="Min GPA" source={"gpa_gte"} alwaysOn />
      <NumberInput label="Max GPA" source={"gpa_lte"} alwaysOn />
    </Filter>
  );
};

export default StudentDrawerFilter;
