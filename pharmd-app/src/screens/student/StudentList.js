/**
* Description: 
  This component contains a DataGrid that takes in field components for children. 
  The componnet manages dispatching the data (resource) to each field and the source (data key). 
*/

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
// Component Imports
import Table from "../../components/Table/Table";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import ChipField from "../../components/Fields/ChipField";
import GradeField from "../../components/Fields/GradeField";
import { STUDENT } from "../../constants/apiObjects";
import CohortField from "../../components/Fields/CohortField";

const StudentList = ({ selectedRow, ...props }) => {
  const dispatch = useDispatch();

  const studentRowClick = (id, basePath, record) => {
    props.setStudentQuickViewExpanded(true);
    dispatch(setStudentSideBar({ isOpen: true }));
    return record.editable ? "edit" : "show";
  };

  return (
    <Table rowClick={studentRowClick} {...props}>
      <EmphasisField source={STUDENT.NEU_ID} label="NUID" />
      <TextField source={STUDENT.FIRST_NAME} label="First Name" />
      <TextField source={STUDENT.LAST_NAME} label="Last Name" />
      <CohortField label="Cohort" />
      <ChipField source={STUDENT.STATUS} />
      <GradeField source={STUDENT.GPA} label="GPA" />
    </Table>
  );
};
export default StudentList;
