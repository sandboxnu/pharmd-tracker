import React from "react";
import tw, { styled } from "twin.macro";
import { STUDENT } from "../../constants/apiObjects";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium inline-flex`}
`;

const CohortField = ({ record = {} }) => {
  const entryDate = record[STUDENT.ENTRY_DATE];
  const gradDate = record[STUDENT.GRAD_DATE];
  const cohort = `${entryDate.slice(-2)}/${gradDate.slice(-2)}`;

  return <Field>{cohort}</Field>;
};
export default CohortField;
