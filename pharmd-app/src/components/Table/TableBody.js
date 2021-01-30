/**
 * Description:
 * TODO:
 * Date: 04-26-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

// Style Imports
import { styled } from "twin.macro";

// Component Imports
import { DatagridBody as RaDatagridBody } from "react-admin";
import TableRow from "./TableRow";

//-------------------------- STYLE --------------------------

const DatagridBody = styled(RaDatagridBody)``;

//-------------------------- COMPONENT --------------------------

const TableBody = props => {
  return <DatagridBody {...props} row={<TableRow />} />;
};

export default TableBody;
