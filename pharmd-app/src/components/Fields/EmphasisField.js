import React from "react";
import tw, {styled} from "twin.macro";
import TextField from './TextField';

const StyledField = styled(TextField)`
  ${tw`fontStyle-6 text-secondary font-semibold`}
`;

const EmphasisField = (props) => {
  return (
    <StyledField {...props}/>
  );
};

export default EmphasisField;
