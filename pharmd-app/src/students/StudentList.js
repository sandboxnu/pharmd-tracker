import React from "react";
import { Datagrid, List, TextField, EditButton } from "react-admin";

const StudentList = props => (
  <Datagrid rowClick="show" {...props}>
    <TextField source="firstName" />
    <TextField source="lastName" />
    <TextField source="id" label="Northeastern ID" />
    <TextField source="status" />
    <TextField source="gradDate" />
    {/*<TextField source="notes" />*/}
    <EditButton />
  </Datagrid>
);

export default StudentList;
