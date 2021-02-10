import React from "react";
import tw, { styled } from "twin.macro";
import Chip from "@material-ui/core/Chip";

const Pill = styled(Chip)`
	
   ${tw`rounded-lg capitalize w-28 fontStyle-4 font-bold tracking-wider`}
   font-size: ${props => props.size == "small" ? `.9em` : `16px`};
   color: ${props => props.theme.palette.pillColors[props.label]};
   background-color: ${props =>
    props.theme.palette.pillColors[props.label].replace("1)", "0.3)")};
	
`;

const Field = styled.a`
  ${tw`p-0`}
`;

const ChipField = ({ record = {}, source, pillSize}) => {
  let textLabel = record[source] ? record[source] : "na";
  return (
    <Field>
      <Pill label={textLabel} size={pillSize} />
    </Field>
  );
};

export default ChipField;