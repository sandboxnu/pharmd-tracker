/**
 * Description:
 * TODO:
 * Date: 04-26-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

// Style Imports
import tw, { styled } from "twin.macro";

// Component Imports
import { Datagrid as DatagridRA } from "react-admin";

//-------------------------- STYLE --------------------------

// Another option for styling
// const Datagrid = styled(({ ...props }) => (
//   <DatagridRA {...props} classes={{ headerCell: "headerCell" }} />
// ))`
//   .headerCell {
//     background-color: red;
//   }
// `;

const Datagrid = styled(DatagridRA)`
  .headerCell {
    /* background-color: red; */
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }

  .rowCell {
    ${tw`h-16`}
  }
`;

//-------------------------- COMPONENT --------------------------

const Table = props => {
  return <Datagrid {...props} classes={{ headerCell: "headerCell", row: "rowCell" }} />;
};

export default Table;
