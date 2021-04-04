import React, { useEffect, useState } from "react";
import { BooleanInput, SimpleForm, TextInput, useNotify } from "react-admin";
import axios from "axios";

import { BACKEND_USERS } from "../../config/backendRoutes";
import ProfilePage from "./ProfilePage";

function ProfileManage() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: ""
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const notify = useNotify();

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    const permissions = localStorage.getItem("permissions");
    if (permissions === "admin") {
      setIsAdmin(true);
    }
    const url = `${BACKEND_USERS}${info.userID}`;
    axios
      .get(url)
      .then(res => {
        delete res.data.password;
        // TODO: remove this once we're getting real data
        setData({
          firstName: "Foo",
          lastName: "bar",
          email: "b@a.com",
          password: "pass",
          isAdmin: true
        });
        // setData(res.data)
      })
      .catch(err => {
        notify("error fetching student data");
      });
  }, []);

  const handleSave = values => {
    axios
      .put(BACKEND_USERS, values)
      .then(res => {
        notify("Updating user successful", "warning");
      })
      .catch(err => {
        notify("error updating user");
      });
  };

  const handleCreate = values => {
    axios
      .post(BACKEND_USERS, values)
      .then(res => {
        notify("Creating user successful", "warning");
      })
      .catch(err => {
        notify("error creating user");
      });
  };

  return (
    <ProfilePage pageName="Manage">
      <h1>Edit Profile</h1>

      <SimpleForm save={handleSave} initialValues={data}>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Email" source="email" />
        <TextInput label="Password" source="password" type="password" />
        <BooleanInput label="Admin?" source="isAdmin" />
      </SimpleForm>

      {isAdmin && (
        <>
          <h1>Create Profile</h1>
          <SimpleForm save={handleCreate}>
            <TextInput label="First Name" source="firstName" />
            <TextInput label="Last Name" source="lastName" />
            <TextInput label="Email" source="email" />
            <TextInput label="Password" source="password" type="password" />
            <BooleanInput label="Admin?" source="isAdmin" />
          </SimpleForm>
        </>
      )}
    </ProfilePage>
  );
}

export default ProfileManage;
