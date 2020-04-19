import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.div`
${tw`p-0`}
`;

const TextInput = styled.input``;

const TextInputField = ({record = {}, source}) => {
    return (
        <Field>
            <TextInput/>
        </Field>
    )
};
