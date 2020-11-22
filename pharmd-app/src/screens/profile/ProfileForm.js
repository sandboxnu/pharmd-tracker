import {BooleanInput, required, SimpleForm, TextInput} from "react-admin";
import React from "react";

export default () =>
<SimpleForm>
    <TextInput label="First Name" source="firstName" resettable validate={[required()]} />
    <TextInput label="Last Name" source="lastName" resettable validate={[required()]} />
    <TextInput label="Email" source="email" resettable validate={[required()]} />
    <TextInput label="Password" source="password" type="password" resettable validate={[required()]} />
    <BooleanInput label="Admin?" source="isAdmin" />
</SimpleForm>
