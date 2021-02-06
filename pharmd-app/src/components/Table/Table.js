import React from "react";
import tw, { styled } from "twin.macro";
import { Datagrid as DatagridRA } from "react-admin";

const Datagrid = styled(DatagridRA)`
  .headerCell {
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }

  .rowCell {
    ${tw`h-16`}
  }
`;

const Table = props => {
  return <Datagrid {...props} classes={{ headerCell: "headerCell", row: "rowCell" }} />;
};

export default Table;
