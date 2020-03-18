import React from "react";

import { Edit, useEditController, SimpleForm, TextField } from "react-admin";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

const StudentQuickView = props => {
  const controllerProps = useEditController(props);
  if (!controllerProps.record) {
    return null;
  }

  return (
    <Edit title={"QickView"} {...props}>
      <SimpleForm
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        resource="students"
        redirect="list"
      >
        <TextField source="name" />
        <TextField source="studentId" label="Northeastern ID" />
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
