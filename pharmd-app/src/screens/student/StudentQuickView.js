import React from "react";

import { Show, SimpleShowLayout as SimpleShowLayoutRA, useEditController } from "react-admin";

import { styled } from "twin.macro";
import QuickProfileField from "../../components/Fields/QuickProfileField";
import QuickInfoField from "../../components/Fields/QuickInfoField";

import NoteListField from "../../components/Fields/NoteListField";
/*
TODO: Material Skeleton for loading
 */

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
    <Show title="QuickView" component="div" {...props}>
      <SimpleShowLayout
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        resource="students"
        redirect="list"
      >
        <QuickProfileField source="id" />
        <QuickInfoField source="id" />
      </SimpleShowLayout>
    </Show>
  );
};

export default StudentQuickView;
