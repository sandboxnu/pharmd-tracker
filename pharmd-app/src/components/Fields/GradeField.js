import React from "react";
import tw, { styled } from "twin.macro";
import { FunctionField } from "react-admin";
import TextField from "./TextField";
import { getFieldColor } from "../../themes/field-colors";
import { STUDENT_COURSE } from "../../constants/apiObjects";
import { formatDecimal } from '../../services/Utility'

const StyledTextField = styled(TextField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.color};
  font-size: 1.4em;
`;

const StyledFunctionField = styled(FunctionField)`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.color};
  font-size: 1.4em;
`;

const GradeField = props => {
  return props.source === STUDENT_COURSE.LETTER_GRADE ?
    (
      <StyledTextField color={getFieldColor(props)} {...props} />
    ) : (
      <StyledFunctionField
        render={record => `${formatDecimal(record[props.source])}`}
        color={getFieldColor(props)}
        {...props}
      />
    );
};

export default GradeField;
