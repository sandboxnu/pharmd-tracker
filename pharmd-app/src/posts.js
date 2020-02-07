import React from 'react';
import { styled } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
// import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import { Edit, SimpleForm, Create, Datagrid, TextField, ReferenceField, EditButton, Filter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
        <ReferenceField source="userId" reference="users">
            <TextField source="name" />
        </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
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

export const PostCreate = props => (
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

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
