//  This field is strictly for demonstration purposes only

import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  color: ${props => props.theme.palette.pillColors[props.label]};
  font-size: 1.4em;
`;

const TempGradeField = ({ source, color }) => <Field label={color}>{source}</Field>;

export default TempGradeField;