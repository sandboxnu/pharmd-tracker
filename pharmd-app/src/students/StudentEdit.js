import React from "react";

import { useEditController, SimpleForm, TextField } from "react-admin";

const StudentEdit = ({ onCancel, ...props }) => {
  const controllerProps = useEditController(props);
  if (!controllerProps.record) {
    return null;
  }

  return (
    <div>
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
    </div>
  );
};

export default StudentEdit;
