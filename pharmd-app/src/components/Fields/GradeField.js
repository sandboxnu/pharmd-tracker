import React from "react";
import tw, { styled } from "twin.macro";
import { NumberField } from "react-admin";
import TextField from "./TextField";
import { getFieldColor } from "../../themes/field-colors";
import { STUDENT_COURSE } from "../../constants/apiObjects";

const StyledTextField = styled(TextField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.color};
  font-size: 1.4em;
`;

const StyledNumberField = styled(NumberField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.color};
  font-size: 1.4em;
`;

const GradeField = props => {
  return props.source === STUDENT_COURSE.LETTER_GRADE ? (
    <StyledTextField color={getFieldColor(props)} {...props} />
  ) : (
    <StyledNumberField
      color={getFieldColor(props)}
      {...props}
      options={{ maximumFractionDigits: 2 }}
    />
  );
};

export default GradeField;
