import React from "react";
import { FunctionField as RAFunctionField } from "react-admin";
import tw, { styled } from "twin.macro";
import { STUDENT } from "../../constants/apiObjects";

const FunctionField = styled(RAFunctionField)`
  ${tw`fontStyle-6 text-gray-700 font-medium inline-flex`}
`;

const CohortField = ({ record = {} }) => {
  return <FunctionField record={record} render={rec => `${rec[STUDENT.ENTRY_DATE].slice(-2)}/${rec[STUDENT.GRAD_DATE].slice(-2)}`} />;
};
export default CohortField;
