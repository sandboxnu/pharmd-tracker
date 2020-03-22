import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Avatar from "../Basic/Avatar";

const Field = styled.span`
  ${tw`fontStyle-6 text-gray-700 font-medium`}
`;

const AvatarField = ({ record = {}, source }) => <Avatar imgUrl={record[source]} />;

export default AvatarField;
