import React from "react";
import tw, { styled } from "twin.macro";
import InfoIcon from "../Basic/IconInfo";
import ErrorIcon from "../../assets/icons/errorFilled.svg";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium inline-flex`}
`;

const Offset = styled.span`
  ${tw`ml-3`}
`;

const CohortField = ({ record = {}, source }) => {
  let cohort = record[source];
  return (
    <Field>
      {cohort.current}
      {cohort.moved && (
        <Offset>
          <InfoIcon src={ErrorIcon} text={`Original: ${cohort.original}`} />
        </Offset>
      )}
    </Field>
  );
};
export default CohortField;
