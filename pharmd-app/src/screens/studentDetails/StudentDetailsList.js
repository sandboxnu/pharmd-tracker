import React from "react";
import { Datagrid as DatagridRA } from "react-admin";
import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import tw, { styled } from "twin.macro";
import EmphasisField from "../../components/Fields/EmphasisField";
import TextField from "../../components/Fields/TextField";
import Table from "../../components/Table/Table";
import TempField from "../../components/Fields/TemporaryField";
import TempGradeField from "../../components/Fields/TempGradeField";
import ChipField from "../../components/Fields/ChipField";
import CohortField from "../../components/Fields/CohortField";
import { STUDENT_STATUS } from '../../constants/apiObjects';

// const Datagrid = styled(DatagridRA)``;
const StudentDetailsList = props => {
    return (
        // Use course id to get the course
        <Table
            {...props}
        >
            <TempField source="Organic Chem" isEmphasis="primary" label="Name" />
            <TempField source="Orgo" label="Course" />
            <TempGradeField source="93% A" label="Score" color={STUDENT_STATUS.ENROLLED} />
            <TempGradeField source="90% A" label="Raw Score" color={STUDENT_STATUS.ENROLLED} />
            {/* use the section id to get the section object for the class average */}
            <TempGradeField source="56%" label="Class Avg" color={STUDENT_STATUS.DROP_BACK} />
            {/* <EditButton /> */}
        </Table>
    );
};
export default StudentDetailsList;
