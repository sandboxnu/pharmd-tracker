import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    TextField,
    EditButton,
    required
} from 'react-admin';

import PostReferenceInput from './PostReferenceInput';
import PostProfilePreviewButton from "./PostProfilePreviewButton";

const StudentList = props => (
    <List {...props}>
        <Datagrid>
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
            <PostProfilePreviewButton id={"id"} />
        </Datagrid>
    </List>
);

export default StudentList;


