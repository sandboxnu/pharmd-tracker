import React from "react";
import tw, { styled } from "twin.macro";
import Chip from "@material-ui/core/Chip";

// ${props => props.theme.typography.size4}
const Pill = styled(Chip)`
	
   ${tw`rounded-lg capitalize w-16 fontStyle-4 text-xs font-bold tracking-wider`}
   margin: 3px;
   color: ${props => props.color};
   background-color: #b5c7f8;
`;

const Field = styled.a`
  ${tw`p-0`}
`;

const BasicTag = ({ text, color }) => {
    const tagColor = color || '#f2994a'
    return (
        <Field>
            <Pill label={text} color={tagColor} />
        </Field>
    );
};

export default BasicTag;