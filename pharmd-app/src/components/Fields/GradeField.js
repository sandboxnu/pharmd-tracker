import React from "react";
import tw, { styled } from "twin.macro";
import TextField from "./TextField";
import { getFieldColor } from "../../themes/field-colors";

const StyledField = styled(TextField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.color};
  font-size: 1.4em;
`;

const GradeField = props => {
  return <StyledField color={getFieldColor(props)} {...props} />;
};

export default GradeField;
