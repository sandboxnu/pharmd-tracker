import React from "react";
import tw, { styled } from "twin.macro";
import { TextField as RATextField } from "react-admin";

const StyledTextField = styled(RATextField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
`;

const TextField = props => {
  return <StyledTextField {...props} />;
};

export default TextField;
