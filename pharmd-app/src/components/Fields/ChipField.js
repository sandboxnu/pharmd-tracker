import React from "react";
import tw, { styled } from "twin.macro";
import { ChipField as RAChipField } from "react-admin";
import { getFieldBackgroundColor, getFieldColor } from "../../themes/field-colors";

const Pill = styled(RAChipField)`
	
   ${tw`rounded-lg capitalize w-28 fontStyle-4 font-bold tracking-wider`}
   color: ${props => props.color};
   background-color: ${props => props.backgroundColor};
	
`;

const ChipField = props => {
  props.record[props.source] = props.record[props.source]
    .replace("_", " ")
    .split(" ")
    .map(s => s.charAt(0) + s.slice(1).toLowerCase())
    .join(" ");

  return (
    <Pill
      color={getFieldColor(props)}
      backgroundColor={getFieldBackgroundColor(props)}
      {...props}
    />
  );
};

export default ChipField;
