import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const InfoDisplay = styled.div`
    width: calc(100% / 3);
    display: inline-block;
    text-align: center; 
    margin-left: auto;
    margin-right: auto;
`;

const Heading = styled.h2`
    ${tw`fontStyle-6 text-sm`}
    color: ${props => props.theme.palette.text.secondary};
    font-weight: bold;
    text-align: center; 
    font-size: 15px;
`;

const Detail = styled.h3`
    color: #2B2B90;
    text-align: center; 
    font-size: 1.5em;
    margin-bottom: 0;
`;

const QuickInfo = ({ info, label }) => {
    return (
        <InfoDisplay>
            <Detail>{info}</Detail>
            <Heading>{label}</Heading>
        </InfoDisplay>
    );
};

export default QuickInfo;