import React from "react";

import {
  Show,
  useEditController,
  SimpleShowLayout as SimpleShowLayoutRA,
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
import ScoredListField from "../../components/Fields/ScoredListField/ScoredListField";
import CourseListField from "../../components/Fields/CourseListField";
import QuickProfileField from "../../components/Fields/QuickProfileField";
import QuickInfoField from "../../components/Fields/QuickInfoField";

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
  console.log("CONTROLLER", controllerProps);
  return (
    <Show title={"QickView"} component={"div"} {...props}>
      <SimpleShowLayout
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        resource="students"
        redirect="list"
      >
        <QuickProfileField source="id" />
        <QuickInfoField source="id" />
        <CourseListField source="courses" />
        <TextField source="notes" />
        <CourseListField source="courses" />
        {/* <ScoredListField source="active_courses" /> */}
        <TextField source="status" />
      </SimpleShowLayout>
    </Show>
  );
};

export default StudentQuickView;
