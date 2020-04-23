import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Field = styled.div`
${tw`p-0`}
`;

const Select = styled.input``;

const SelectField= ({record = {}, source}) => {
    return (
        <Field>
            <Select/>
        </Field>
    )
};
