import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Button from '@material-ui/core/Button';

const ButtonCustom = styled(Button)`
    ${tw`m-4`}
`;

export default ButtonCustom;
