import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import { TextField, EmailField, DatagridHeaderCell } from "react-admin";
import { withDesign } from "storybook-addon-designs";
import { FieldTitle } from "ra-core";
import TableRow from "../components/Table/TableRow";

import EmphasisField from "../components/Fields/EmphasisField";
// import TextField from "../components/Fields/TextField";
import ChipField from "../components/Fields/ChipField";
import CohortField from "../components/Fields/CohortField";

const data = require("../Mocks/students.json");

export default {
  title: "Table",
  decorators: [withDesign]
};

console.log("DATA", data.students[0]);
const props = {
  id: 1,
  neu_id: 40029272,
  name: "Maurine Rath",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg",
  status: "graduated",
  gpa: 1.289,
  test_avg: 84,
  cohort: {
    current: "19/24",
    original: "19/24",
    moved: false
  }
};

export const Row = () => (
  <Table>
    <TableBody>
      <TableRow {...props}>
        <EmphasisField record={props} source="id" label="NUID" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <CohortField source="gradDate" label="Cohort" />
        <ChipField record={{ status: "ENROLLED" }} source="status" />
        <TextField source="gpa" label="GPA" />
        {/* <TextField source="test_avg" label="Test Avg" /> */}
      </TableRow>
    </TableBody>
  </Table>
);

export const RowHeader = () => (
  <Table>
    <TableHead>
      <TableRow {...props}>
        <FieldTitle label="NEU ID" />
        <FieldTitle label="Name" />
        <FieldTitle label="Cohort" />
        <FieldTitle label="Status" />
        <FieldTitle label="GPA" />
        <FieldTitle label="Test Avg" />
      </TableRow>
    </TableHead>
  </Table>
);

RowHeader.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/QBWcVYJkF6K8o7WErRPsxd/Student-List-Mockups?node-id=31%3A412"
    }
  }
};

Row.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/QBWcVYJkF6K8o7WErRPsxd/Student-List-Mockups?node-id=31%3A413"
    }
  }
};
