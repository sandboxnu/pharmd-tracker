// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
// Style Imports
import tw, { styled } from "twin.macro";
// Component Imports
import { Datagrid as DatagridRA } from "react-admin";

// -------------------------- STYLE --------------------------
const Datagrid = styled(DatagridRA)`
  .headerCell {
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }

  .rowCell {
    ${tw`h-16`}
  }
`;

// -------------------------- COMPONENT --------------------------
const Table = props => {
  return <Datagrid {...props} classes={{ headerCell: "headerCell", row: "rowCell" }} />;
};

export default Table;
