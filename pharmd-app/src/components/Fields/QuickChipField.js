import React from "react";
import tw, { styled } from "twin.macro";
import { Chip as MuiChip } from "@material-ui/core";
import { getFieldBackgroundColor, getFieldColor } from "../../themes/field-colors";

const Pill = styled(MuiChip)`
  ${tw`rounded-lg capitalize w-24 fontStyle-4 font-bold tracking-wider`}
  font-size: ${props => props.label === "Graduated" ? `0.75em` : `0.8em`};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

const QuickChipField = props => {
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

export default QuickChipField;
