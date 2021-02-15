//  This field is strictly for demonstration purposes only
import React from "react";
import Table from "../../components/Table/Table";
import TempField from "../../components/Fields/TemporaryField";
import TempGradeField from "../../components/Fields/TempGradeField";

const StudentDetailsList = props => {
  return (
    <Table {...props}>
      <TempField source="Organic Chem" isEmphasis="primary" label="Name" />
      <TempField source="Orgo" label="Course" />
      <TempGradeField source="93% A" label="Score" color="Enrolled" />
      <TempGradeField source="90% A" label="Raw Score" color="Enrolled" />
      <TempGradeField source="56%" label="Class Avg" color="Dropback" />
    </Table>
  );
};
export default StudentDetailsList;
