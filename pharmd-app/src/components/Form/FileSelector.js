import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.div`
${tw`p-0`}
`;

const FileSelect = styled.input``;

const FileSelectorField = ({record = {}, source}) => {
    return (
        <Field>
            <FileSelect/>
        </Field>
    )
};
