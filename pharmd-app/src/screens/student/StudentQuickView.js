import React from "react";

import {
  Edit,
  useEditController,
  SimpleForm,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ReferenceManyField,
  DataGrid
} from "react-admin";

import styled from "styled-components/macro";
import tw from "tailwind.macro";
import AvatarField from "../../components/Fields/AvatarField";
import CourseListField from "../../components/Fields/CourseListField";
const StudentQuickView = props => {
  const controllerProps = useEditController(props);
  if (!controllerProps.record) {
    return null;
  }
  console.log("CONTROLLER", controllerProps);
  return (
    <Edit title={"QickView"} {...props}>
      <SimpleForm
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        resource="students"
        redirect="list"
      >
        <AvatarField source="avatar" />
        <TextField source="name" />
        <TextField source="studentId" label="Northeastern ID" />
        <CourseListField source="courses" />
        <TextField source="status" />
        <TextField source="graduationYear" />
        <TextField source="orgoFinalGrade" />
        <TextField source="orgoFinalLetter" />
        <TextField source="orgo2FinalGrade" />
        <TextField source="orgo2FinalLetter" label="Northeastern ID" />
        <TextField source="pcolFinalGrade" />
        <TextField source="pcolFinalLetter" />
        <TextField source="pcol2FinalGrade" />
        <TextField source="pcol2FinalLetter" />
        <TextField source="cdmFinalGrade" />
        <TextField source="cdmFinalLetter" label="Northeastern ID" />
        <TextField source="cdm2FinalGrade" />
        <TextField source="cdm2FinalLetter" />
        <TextField source="aiFinalGrade" />
        <TextField source="aiFinalLetter" />
        <TextField source="cdm3FinalGrade" />
        <TextField source="cdm3FinalLetter" />
        <TextField source="cdm4FinalGrade" />
        <TextField source="cdm4FinalGrade" />
        <TextField source="notes" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentQuickView;
