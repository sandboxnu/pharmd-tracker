/**
 * Description:
 * TODO:
 * Date: 04-26-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { cloneElement } from "react";

// Style Imports
import tw, { styled } from "twin.macro";

// Component Imports
import TableCell from "@material-ui/core/TableCell";
import MuiTableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

//-------------------------- STYLE --------------------------

const TableRowStyled = styled(MuiTableRow)`
  &.MuiTableRow-root {
    ${tw`h-16`}
  }

  & .MuiTableCell-head {
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }
`;

//-------------------------- COMPONENT --------------------------

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
