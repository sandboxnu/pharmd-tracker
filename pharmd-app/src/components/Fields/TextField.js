import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
`;

const TextField = ({ record = {}, source }) => <Field>{record[source]}</Field>;

export default TextField;
