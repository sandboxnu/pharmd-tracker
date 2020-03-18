import React from "react";
import { Datagrid as DatagridRA } from "react-admin";
import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import ChipField from "../../components/Fields/ChipField";

// Another option for styling
// const Datagrid = styled(({ ...props }) => (
//   <DatagridRA {...props} classes={{ headerCell: "headerCell" }} />
// ))`
//   .headerCell {
//     background-color: red;
//   }
// `;

const Datagrid = styled(DatagridRA)`
  .headerCell {
    /* background-color: red; */
    ${tw`h-18 fontStyle-5 tracking-wide text-gray-600`}
  }

  .rowCell {
    ${tw`h-16`}
  }
`;

// const Datagrid = styled(DatagridRA)``;
const StudentList = ({ selectedRow, ...props }) => {
  const dispatch = useDispatch();

  const studentRowClick = (id, basePath, record) => {
    dispatch(setStudentSideBar({ isOpen: true }));
    return record.editable ? "edit" : "show";
  };

  return (
    <Datagrid
      rowClick={studentRowClick}
      classes={{ headerCell: "headerCell", row: "rowCell" }}
      {...props}
    >
      <EmphasisField source="studentId" label="NEU ID" />
      <TextField source="name" />
      <TextField source="graduationYear" label="Cohort" />
      <ChipField source="status" />
      <TextField source="gpa" label="GPA" />
      {/* <EditButton /> */}
    </Datagrid>
  );
};
export default StudentList;
