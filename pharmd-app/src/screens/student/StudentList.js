/**
* Description: 
  This component contains a DataGrid that takes in field components for children. 
  The componnet manages dispatching the data (resource) to each field and the source (data key). 
* TODO:
*       - Figure out if the headeerCell class can be moved to the TableRow component
* Date: 04-27-2020
*/

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
// import { Datagrid as DatagridRA } from "react-admin";

import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";

// Component Imports
import Table from "../../components/Table/Table";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import ChipField from "../../components/Fields/ChipField";
import CohortField from "../../components/Fields/CohortField";
import { STUDENT } from "../../constants/apiObjects";

const StudentList = ({ selectedRow, ...props }) => {
  const dispatch = useDispatch();

  const studentRowClick = (id, basePath, record) => {
    dispatch(setStudentSideBar({ isOpen: true }));
    props.setStudentQuickViewExpanded(true);
    console.log(props);
    return record.editable ? "edit" : "show";
  };

  return (
    <Table
      rowClick={studentRowClick}
      {...props}
    >
      <EmphasisField source={STUDENT.NEU_ID} label="NEU ID" />
      <TextField source={STUDENT.NAME} />
      <CohortField source={STUDENT.COHORT} label="Cohort" />
      <ChipField source={STUDENT.STATUS} />
      <TextField source={STUDENT.GPA} label="GPA" />
      {/* <TextField source={STUDENT.TEST_AVG} label="Test Avg" /> */}
      {/* <EditButton /> */}
    </Table>
  );
};
export default StudentList;
