import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField'

export const StatusList = props => (
    <List {...props} title="Status">
        <Datagrid rowClick="edit">
            <TextField source="status" />
            <TextField source="graduationYear" />
            {/*<TextField source="company.name" />*/}
        </Datagrid>
    </List>
);
