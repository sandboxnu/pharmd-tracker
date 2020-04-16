import React from "react";
import styled from "styled-components/dist/styled-components-macro.esm";
import tw from "tailwind.macro";
import Pill from '../Fields/ChipField'

const Button = styled(Pill)`
`;

const Field = styled.a`
  ${tw`p-0`}
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
