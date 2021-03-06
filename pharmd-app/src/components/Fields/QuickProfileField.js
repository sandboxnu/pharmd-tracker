import React from "react";
import { Loading, TextField, useGetOne } from "react-admin";

import tw, { styled } from "twin.macro";
import AvatarField from "./AvatarField";
import QuickChipField from "./QuickChipField";

const Profile = styled.section`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const NameField = styled(TextField)`
  display: block;
  font-size: 2em;
  font-weight: bold;
  color: #2b2b90;
`;

const IdField = styled(TextField)`
  display: block;
  font-size: 1em;
  color: ${props => props.theme.palette.text.secondary};
`;

const StatusField = styled.span`
  ${tw` w-28 `}
  display: block;
  margin-right: auto;
  margin-bottom: 15px;
`;

const PictureField = styled(AvatarField)`
  display: block;
`;

const QuickProfileField = ({ record = {}, source }) => {
  const id = record[source];
  const { data, loading, error } = useGetOne("students", id);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error, id:{id} is not found</p>;
  }
  return (
    <Profile>
      <StatusField>
        <QuickChipField record={data} source="status" />
      </StatusField>
      <PictureField record={data} source="avatar" />
      <NameField record={data} source="firstName" />
      <NameField record={data} source="lastName" />
      <IdField record={data} source="id" label="Northeastern ID" />
    </Profile>
  );
};

export default QuickProfileField;
