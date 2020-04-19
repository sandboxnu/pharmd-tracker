import React from "react";
import {useGetOne} from "react-admin";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import NoteIcon from "../Basic/NoteIcon";
import ChipField from "./ChipField";

const Info = styled.div`
  ${tw`fontStyle-6 text-black font-medium`}
  width: 100%;
  padding-bottom: 10px;
  font-size: .89em;
  display: grid;
  grid-template-columns: auto;
`;

const Heading = styled.div`
  margin-top: 1em;
  align-items: center;
  display: inline-flex;
  height: auto;
`;

const Time = styled.div`
  
  align-items: center;
  display: inline-flex;
  height: auto;
`;

const Title = styled.h3`
  margin: 0px;
  font-size: 1.2em;
  height: auto;
`;

const Date = styled.h4`
  font-weight: normal;
  font-size: .85em;
  margin: 0px 0px 0px .5em;
  color: ${props => props.theme.palette.tertiary.main};
`;

const Content = styled.div`
  height: 3em;
  line-height: 1em;
  overflow: hidden;
  margin-top: .4em;
  word-break: break-all;
`

const NoteField = () => {
    return (
        <Info>
            <Heading>
                <Title>Note Title</Title>
                <NoteIcon src={EditIcon} color="black" size="small" isPrimary={"primary"}/>
            </Heading>
            <Time>
                <NoteIcon src={AccessTimeIcon} color="grey" size="inherit" />
                <Date>Date</Date>
            </Time>
            {/* if the length of string is more than 2 lines - ask jose how to check for this*/}
            <Content><p>1234567890llllllllll123123456dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7890llllllllll1231234567890llllllllll123</p></Content>
        {/*  add a contional where if 3 or more...  */}
        {/* use QuickChipField for the chip component */}

        </Info>
    );
};

export default NoteField;