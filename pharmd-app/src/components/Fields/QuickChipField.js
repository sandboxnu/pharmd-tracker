import React from "react";
import tw, {styled} from "twin.macro";
import {ChipField as RAChipField} from "react-admin"
import {getFieldBackgroundColor, getFieldColor} from "../../themes/field-colors";

const Pill = styled(RAChipField)`
	
   ${tw`rounded-lg capitalize w-24 fontStyle-4 font-bold tracking-wider`}
   font-size: .9em;
   color: ${props => props.color};
   background-color: ${props => props.backgroundColor};
	
`;

const QuickChipField = (props) => {
  return (
    <Pill
      color={getFieldColor(props)}
      backgroundColor={getFieldBackgroundColor(props)}
      {...props} />
  );
};

export default QuickChipField;
