import React from "react";
import {Show, SimpleForm, SimpleShowLayout, TextField, useEditController, List, useGetOne, Query, Loading, Error} from "react-admin";

import styled from "styled-components/macro";
import tw from "tailwind.macro";
import AvatarField from "./AvatarField";
import ChipField from "./ChipField";

const Profile = styled.section`
    display: block;
    text-align: center; 
    margin-left: auto;
    margin-right: auto;
`;

const NameField = styled(TextField)`
    display: block;
    font-size: 2em;
    font-weight: bold;
    color: #2B2B90;
`;

const IdField = styled(TextField)`
    display: block;
    font-size: 1em;
    color: ${props => props.theme.palette.text.secondary};
`;

const StatusField = styled.span`
    ${tw` w-28 `}
    display: block;
    margin-right: auto;
    margin-bottom: 30px;
`;

const ChipSmaller = styled(ChipField)`
  ${tw` w-16 `}
`

const PictureField = styled(AvatarField)`
    display: block;
`;

const QuickProfileField = ({record = {}, source}) => {

    let id = record[source];
    const {data, loading, error} = useGetOne('students', id);
    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <p>Error, id: {id} is not found</p>;
    }
    return (
        <Profile>
            <StatusField><ChipSmaller record={data} source="status" /></StatusField>
            <PictureField record={data} source="avatar" />
            <NameField record={data} source="name" />
            <IdField record={data} source="neu_id" label="Northeastern ID" />
        </Profile>
    );
};

export default QuickProfileField;