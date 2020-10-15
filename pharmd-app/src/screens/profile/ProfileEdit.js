import React from "react";
import ProfilePage from "./ProfilePage";
import {BooleanInput, Edit, required, SimpleForm, TextInput} from 'react-admin';
import ProfileForm from "./ProfileForm";

const EditForm = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="First Name" source="firstName" resettable validate={[required()]} />
            <TextInput label="Last Name" source="lastName" resettable validate={[required()]} />
            <TextInput label="Email" source="email" resettable validate={[required()]} />
            <TextInput label="Password" source="password" type="password" resettable validate={[required()]} />
            <BooleanInput label="Admin?" source="isAdmin" />
        </SimpleForm>
    </Edit>
);

const ProfileEdit = props => {
    return <ProfilePage pageName="Edit">
        <EditForm {...props}/>
    </ProfilePage>

};

export default ProfileEdit
