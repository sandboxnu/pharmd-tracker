import React, {Component, useEffect, useState} from 'react';
import ProfilePage from "./ProfilePage";
import {BooleanInput, required, Show, SimpleForm, SimpleShowLayout, TextInput, Edit} from 'react-admin';
import {BACKEND_USERS} from "../../config/backendRoutes";
import axios from "axios";
import { useNotify } from 'react-admin';


function ProfileManage() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: '',
    });

    const notify = useNotify();

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("userInfo"));
        const url = `${BACKEND_USERS}${info.userID}`;
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res);
                delete res.data.password;
                setData(res.data)
            })
            .catch(err => {
                console.log("error getting stuff")
                console.log(err)
            })
    }, []);

    const handleSave = (values) => {
        axios.put(BACKEND_USERS, values)
            .then(res => {
                console.log("Updating user successful")
                notify('Updating user successful', 'warning')
            })
            .catch(err => {
                console.log("Failure updating user")
                console.error(err)
            })
    }

    const handleCreate = (values) => {
        axios.post(BACKEND_USERS, values)
            .then(res => {
                notify('Creating user successful', 'warning')

            })
            .catch(err => {
                console.error(err)
            })
    };

        return (
            <ProfilePage pageName="Show">
                <h1>Edit Profile</h1>
                <SimpleForm save={handleSave} initialValues={data}>
                    <TextInput label="First Name" source="firstName" />
                    <TextInput label="Last Name" source="lastName"  />
                    <TextInput label="Email" source="email" />
                    <TextInput label="Password" source="password" type="password"  />
                    <BooleanInput label="Admin?" source="isAdmin" />
                </SimpleForm>

                <h1>Create Profile</h1>
                <SimpleForm save={handleCreate}>
                    <TextInput label="First Name" source="firstName" />
                    <TextInput label="Last Name" source="lastName"  />
                    <TextInput label="Email" source="email" />
                    <TextInput label="Password" source="password" type="password"  />
                    <BooleanInput label="Admin?" source="isAdmin" />
                </SimpleForm>
            </ProfilePage>
        );

}

export default ProfileManage;
