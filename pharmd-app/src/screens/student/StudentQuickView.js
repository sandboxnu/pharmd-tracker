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
import CourseListField from "../../components/Fields/CourseListField";
import QuickProfileField from "../../components/Fields/QuickProfileField";
import QuickInfoField from "../../components/Fields/QuickInfoField";
import NoteListField from "../../components/Fields/NoteListField";

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
        <QuickProfileField source="id" />
        <QuickInfoField source="id" />
        <CourseListField source="active_courses" />
        <NoteListField source="courses" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentQuickView;
