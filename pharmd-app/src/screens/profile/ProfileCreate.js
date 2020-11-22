import React from "react";
import ProfilePage from "./ProfilePage";
import {BooleanInput, Create, required, SimpleForm, TextInput} from 'react-admin';
import ProfileForm from "./ProfileForm";

const CreateForm = props => (
    <Create {...props}>
        {/*<ProfileForm {...props} />*/}
        <SimpleForm>
            <TextInput label="First Name" source="firstName" resettable validate={[required()]} />
            <TextInput label="Last Name" source="lastName" resettable validate={[required()]} />
            <TextInput label="Email" source="email" resettable validate={[required()]} />
            <TextInput label="Password" source="password" type="password" resettable validate={[required()]} />
            <BooleanInput label="Admin?" source="isAdmin" />
        </SimpleForm>
    </Create>
);

const ProfileCreate = props => {
    return <ProfilePage pageName="Create">
        <CreateForm {...props}/>
    </ProfilePage>
};

export default ProfileCreate
