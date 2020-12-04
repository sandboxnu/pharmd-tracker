import React from "react";
import { Datagrid as DatagridRA } from "react-admin";
import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import TempField from "../../components/Fields/TemporaryField";
import TempGradeField from "../../components/Fields/TempGradeField";
import ChipField from "../../components/Fields/ChipField";
import CohortField from "../../components/Fields/CohortField";

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
const StudentDetailsList = props => {
    return (
        // Use course id to get the course
        <Datagrid
            classes={{ headerCell: "headerCell", row: "rowCell" }}
            {...props}
        >
            <TempField source="Organic Chem" isEmphasis="primary" label="Name" />
            <TempField source="Orgo" label="Course" />
            <TempGradeField source="93% A" label="Score" color="ENROLLED" />
            <TempGradeField source="90% A" label="Raw Score" color="ENROLLED" />
            {/* use the section id to get the section object for the class average */}
            <TempGradeField source="56%" label="Class Avg" color="DROP_BACK" />
            {/* <EditButton /> */}
        </Datagrid>
    );
};
export default StudentDetailsList;
