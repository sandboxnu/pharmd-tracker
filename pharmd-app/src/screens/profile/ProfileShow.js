import React, { useEffect, useState } from "react";
import { BooleanInput, Show, SimpleForm, SimpleShowLayout, TextInput } from "react-admin";
import axios from "axios";
import ProfilePage from "./ProfilePage";
import { BACKEND_USERS } from "../../config/backendRoutes";

const ProfileShowView = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Email" source="email" />
        <TextInput label="Password" source="password" type="password" />
        <BooleanInput label="Admin?" source="isAdmin" />
      </SimpleForm>
    </SimpleShowLayout>
  </Show>
);

const ProfileShow = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    const url = `${BACKEND_USERS}${info.userID}`;
    axios
      .get(url)
      .then(res => {})
      .catch(err => {});
  }, []);
  return (
    <ProfilePage pageName="View">
      <ProfileShowView {...props} />
    </ProfilePage>
  );
};

export default ProfileShow;
