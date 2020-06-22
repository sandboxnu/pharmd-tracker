import React, {useEffect, useState} from "react";
import {BooleanInput, required, Show, SimpleForm, SimpleShowLayout, TextInput} from 'react-admin';
import ProfileForm from "./ProfileForm";
import ProfilePage from "./ProfilePage";
import TextField from "../../components/Fields/TextField";
import {AUTH_URL, BACKEND_URL, BACKEND_USERS} from "../../config/backendRoutes";
import axios from 'axios';

const ProfileShowView = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <SimpleForm>
            <TextInput label="First Name" source="firstName" />
            <TextInput label="Last Name" source="lastName"  />
            <TextInput label="Email" source="email" />
            <TextInput label="Password" source="password" type="password"  />
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
        console.log(url)
        axios.get(url)
            .then(res => {
            console.log(res);
        })
            .catch(err => {
                console.log("error getting stuff")
                console.log(err)
            })
    }, []);
    return <ProfilePage pageName="View">
        <ProfileShowView {...props}/>
    </ProfilePage>

};

export default ProfileShow
