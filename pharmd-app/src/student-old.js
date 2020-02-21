import React from 'react';

import {
  SimpleForm,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  List,
  SimpleShowLayout,
  Show
 } from 'react-admin';

export const StudentList = props => (
    <List filters={<StudentFilter />} title="Students" {...props} >
        <Datagrid >
            <TextField source="name" />
            <TextField source="studentId" label = "Northeastern ID"/>
            <TextField source="status" />
            <TextField source="graduationYear" />
            <TextField source="orgoFinalGrade" />
            <TextField source="orgoFinalLetter" />
            <TextField source="orgo2FinalGrade" />
            <TextField source="orgo2FinalLetter" label = "Northeastern ID"/>
            <TextField source="pcolFinalGrade" />
            <TextField source="pcolFinalLetter" />
            <TextField source="pcol2FinalGrade" />
            <TextField source="pcol2FinalLetter" />
            <TextField source="cdmFinalGrade" />
            <TextField source="cdmFinalLetter" label = "Northeastern ID"/>
            <TextField source="cdm2FinalGrade" />
            <TextField source="cdm2FinalLetter" />
            <TextField source="aiFinalGrade" />
            <TextField source="aiFinalLetter" />
            <TextField source="cdm3FinalGrade" />
            <TextField source="cdm3FinalLetter" />
            <TextField source="cdm4FinalGrade" />
            <TextField source="cdm4FinalGrade" />
            <TextField source="notes" />
            <EditButton />
        </Datagrid>
    </List>
);

// export const StudentEdit = props => (
//     <Edit title={<StudentTitle />} {...props}>
//         <SimpleForm>
//             <TextInput disabled source="studentId" />
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Edit>
// );

export const StudentEdit = ({ ...props }) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
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
