// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { Datagrid as DatagridRA } from "react-admin";
import tw, { styled } from "twin.macro";
import { COURSE } from "../../constants/apiObjects";
// Component Imports
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";

// Style Imports

// -------------------------- STYLE --------------------------

const Datagrid = styled(DatagridRA)`
  .headerCell {
    /* background-color: red; */
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }

  .rowCell {
    ${tw`h-16`}
  }
`;

// -------------------------- COMPONENT --------------------------

const CourseList = props => {
  return (
    <Datagrid classes={{ headerCell: "headerCell", row: "rowCell" }} {...props}>
      <EmphasisField source={COURSE.SUBJECT} label="Subject" />
      <EmphasisField source={COURSE.NUMBER} label="Number" />
      <TextField source={COURSE.NAME} label="Name" />
    </Datagrid>
  );
};
export default CourseList;
