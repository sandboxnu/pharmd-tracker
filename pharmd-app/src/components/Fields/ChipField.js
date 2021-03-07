import React from "react";
import tw, { styled } from "twin.macro";
import Chip from "@material-ui/core/Chip";

// ${props => props.theme.typography.size4}
const Pill = styled(Chip)`
	
   ${tw`rounded-lg capitalize w-28 fontStyle-4 font-bold tracking-wider`}
	
   color: ${props => props.theme.palette.pillColors[props.label]};
   background-color: ${props =>
     props.theme.palette.pillColors[props.label].replace("1)", "0.3)")};
	
`;

const Field = styled.a`
  ${tw`p-0`}
`;

// record[source]

const ChipField = ({ record = {}, source }) => {
  const textLabel = record[source] ? record[source] : "NA";
  return (
    <Field>
      <Pill label={textLabel} />
    </Field>
  );
};

export default ChipField;
