import React, { cloneElement } from "react";
import tw, { styled } from "twin.macro";
import TableCell from "@material-ui/core/TableCell";
import MuiTableRow from "@material-ui/core/TableRow";

const TableRowStyled = styled(MuiTableRow)`
  &.MuiTableRow-root {
    ${tw`h-16`}
  }

  & .MuiTableCell-head {
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }
`;

const TableRow = ({ record, resource, id, children, selected, basePath }) => {
  return (
    <TableRowStyled key={id} hover selected={selected}>
      {React.Children.map(children, field => (
        <TableCell key={`${id}-${field.props.source}`}>
          {cloneElement(field, {
            record,
            basePath,
            resource
          })}
        </TableCell>
      ))}
    </TableRowStyled>
  );
};

export default TableRow;
