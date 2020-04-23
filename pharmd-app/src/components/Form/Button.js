import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Button from '@material-ui/core/Button';

const Field = styled.div`
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

export default Button;
