import React, { cloneElement } from "react";

import TableCell from "@material-ui/core/TableCell";
import MuiTableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

const TableRowStyled = styled(MuiTableRow)`
  &.MuiTableRow-root {
    ${tw`h-16`}
  }

  & .MuiTableCell-head {
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
    /* ${tw`h-18 fontStyle-3 text-primary-medium font-semibold tracking-wider`} */
  }
`;

const TableRow = ({ record, resource, id, onToggleItem, children, selected, basePath }) => {
  return (
    <TableRowStyled key={id} hover={true} selected={selected}>
      {/* first column: selection checkbox */}
      {/* <TableCell padding="none">
        {record.selectable && (
          <Checkbox checked={selected} onClick={() => onToggleItem(id)} />
        )}
      </TableCell> */}
      {/* data columns based on children */}
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
