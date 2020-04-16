import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import ChipField from '../Fields/ChipField'

const Button = styled(ChipField)`
`;

const Field = styled.div`
  ${tw`p-5`}
`;

const ButtonField = ({record = {}, source}) => {
    let textLabel = record[source] ? record[source] : '';
    return (
        <Field>
            <Button label={textLabel} />
        </Field>
    )
};

export default ButtonField;
