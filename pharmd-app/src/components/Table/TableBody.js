/**
 * Description:
 * TODO:
 * Date: 04-26-2020
 */

//-------------------------- IMPORTS --------------------------

import React from "react";

import { DatagridBody as RaDatagridBody } from "react-admin";
import TableRow from "./TableRow";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

const DatagridBody = styled(RaDatagridBody)``;

const TableBody = props => {
  return <DatagridBody {...props} row={<TableRow />} />;
};

export default TableBody;
