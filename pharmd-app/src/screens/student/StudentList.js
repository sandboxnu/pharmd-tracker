/**
* Description: 
  This component contains a DataGrid that takes in field components for children. 
  The componnet manages dispatching the data (resource) to each field and the source (data key). 
* TODO:
*       - Figure out if the headeerCell class can be moved to the TableRow component
* Date: 04-27-2020
*/

//-------------------------- IMPORTS --------------------------

// Style Imports
import React from "react";
import { Datagrid as DatagridRA } from "react-admin";
import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import ChipField from "../../components/Fields/ChipField";
import CohortField from "../../components/Fields/CohortField";
import { STUDENT } from "../../constants/apiObjects";

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
      <EmphasisField source={STUDENT.NEU_ID} label="NUID" />
      <TextField source={STUDENT.FIRST_NAME} label="First Name" />
      <TextField source={STUDENT.LAST_NAME} label="Last Name" />
      <TextField source={STUDENT.COHORT} label="Cohort" />
      <ChipField source={STUDENT.STATUS} />
      <TextField source={STUDENT.GPA} label="GPA" />

      {/*<TextField source={STUDENT.NAME} />*/}
      {/*<CohortField source={STUDENT.COHORT} label="Cohort" />*/}
      {/*<TextField source={STUDENT.GPA} label="GPA" />*/}
      {/* <TextField source={STUDENT.TEST_AVG} label="Test Avg" /> */}
      {/* <EditButton /> */}
    </Datagrid>
  );
};
export default StudentList;
