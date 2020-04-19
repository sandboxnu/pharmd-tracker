import React from "react";

import styled from "styled-components/macro";
import tw from "tailwind.macro";
import CourseListField from "../../components/Fields/CourseListField";
import QuickProfileField from "../../components/Fields/QuickProfileField";
import QuickInfoField from "../../components/Fields/QuickInfoField";
import NoteListField from "../../components/Fields/NoteListField";
import {Loading, useGetOne} from "react-admin";

const Details = styled.div`
  padding: 8px 24px 24px;
`;

const StudentDetailsSide = ({source}) => {
    return (
        <Details>
            <QuickProfileField source="id" record={source} />
            <QuickInfoField source="id" record={source} />
            <NoteListField source="courses" record={source} />
        </Details>
    );
};

export default StudentDetailsSide;