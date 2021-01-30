import React from "react";
import tw, { styled } from "twin.macro";

const Field = styled.span`
  ${tw`fontStyle-6 text-secondary font-semibold`}
`;

const EmphasisField = ({ record = {}, source }) => <Field>{record[source]}</Field>;

export default EmphasisField;
