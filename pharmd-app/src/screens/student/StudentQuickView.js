import React from "react";
import { Show, useEditController, SimpleShowLayout as SimpleShowLayoutRA } from "react-admin";
import { styled } from "twin.macro";
import CourseListField from "../../components/Fields/CourseListField";
import QuickProfileField from "../../components/Fields/QuickProfileField";
import QuickInfoField from "../../components/Fields/QuickInfoField";
import NoteListField from "../../components/Fields/NoteListField";

const SimpleShowLayout = styled(SimpleShowLayoutRA)`
  &.MuiCard-root {
    box-shadow: none;
  }
`;

const StudentQuickView = props => {
  const controllerProps = useEditController(props);
  if (!controllerProps.record) {
    return null;
  }
  return (
    <Show title="QickView" component="div" {...props}>
      <SimpleShowLayout
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        resource="students"
        redirect="list"
      >
        <QuickProfileField source="id" />
        <QuickInfoField source="id" />
        <CourseListField source="active_courses" />
        <NoteListField source="courses" />
      </SimpleShowLayout>
    </Show>
  );
};

export default StudentQuickView;
