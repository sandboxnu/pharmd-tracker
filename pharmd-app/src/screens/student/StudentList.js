/**
* Description: 
  This component contains a DataGrid that takes in field components for children. 
  The componnet manages dispatching the data (resource) to each field and the source (data key).
*/

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";


// Component Imports
import Table from "../../components/Table/Table";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import ChipField from "../../components/Fields/ChipField";
import CohortField from "../../components/Fields/CohortField";
import { STUDENT } from "../../constants/apiObjects";

const StudentList = ({ selectedRow, ...props }) => {

  const studentRowClick = (id, basePath, record) => {
    props.setStudentSidebar(true);
    props.setStudentQuickViewExpanded(true);
    return record.editable ? "edit" : "show";
  };

  return (
    <Table rowClick={studentRowClick} {...props}>
      <EmphasisField source={STUDENT.NEU_ID} label="NEU ID" />
      <TextField source={STUDENT.NAME} />
      <CohortField source={STUDENT.COHORT} label="Cohort" />
      <ChipField source={STUDENT.STATUS} />
      <TextField source={STUDENT.GPA} label="GPA" />
    </Table>
  );
};
export default StudentList;
