import React from "react";
import tw, { styled } from "twin.macro";
import { Chip as MuiChip } from "@material-ui/core";
import { getFieldBackgroundColor, getFieldColor } from "../../themes/field-colors";

const Pill = styled(MuiChip)`
  ${tw`rounded-lg capitalize w-28 fontStyle-4 font-bold tracking-wider`}
  font-size: 1.1em;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

const ChipField = props => {
  const readableStatus = props.record[props.source]
    .replace("_", " ")
    .split(" ")
    .map(s => s.charAt(0) + s.slice(1).toLowerCase())
    .join(" ");

  return (
    <Pill
      label={readableStatus}
      color={getFieldColor(props)}
      backgroundColor={getFieldBackgroundColor(props)}
    />
  );
};

export default ChipField;
