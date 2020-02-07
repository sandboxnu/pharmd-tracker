import React from 'react';
import { styled } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
// import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import { Edit, SimpleForm, Create, Datagrid, TextField, ReferenceField, EditButton, Filter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

export const StudentsList = props => (
    <List filters={<StudentFilter />} {...props}>
        <Datagrid >
            <TextField source="name" />
            <TextField source="id" />
            <TextField source="graduationYear" />
            <TextField source="finalLetter" />
            <TextField source="finalPercent" />
            <EditButton />
        </Datagrid>
    </List>
);

export const StudentEdit = props => (
    <Edit title={<StudentTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

const StudentTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const StudentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
