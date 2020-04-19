//  This field is strictly for demonstration purposes only

import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
  
  // replace with a way to actually get color based off of number
  // maybe if statements in the const the sets [color] = to a color
  color: ${props => props.theme.palette.pillColors[color]};
`;

const GradeField = ({ record = {}, source }) => <Field>{record[source]}</Field>;

export default GradeField;
