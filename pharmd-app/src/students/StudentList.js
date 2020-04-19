import React from "react";
import { Datagrid, List, TextField, EditButton } from "react-admin";

const StudentList = props => (
  <Datagrid rowClick="show" {...props}>
    <TextField source="name" />
    <TextField source="studentId" label="Northeastern ID" />
    <TextField source="status" />
    <TextField source="graduationYear" />
    <TextField source="notes" />
    <EditButton />
  </Datagrid>
);

export default StudentList;
