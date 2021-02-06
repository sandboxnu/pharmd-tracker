import React from "react";
import tw, { css, styled } from "twin.macro";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium`}

  ${props =>
    props.primary &&
    css`
      ${tw`fontStyle-6 text-secondary font-semibold`}
    `}
  font-size: 1.4em;
`;

const TempField = ({ source, isEmphasis }) => {
  return <Field primary={isEmphasis}>{source}</Field>;
};

export default TempField;
