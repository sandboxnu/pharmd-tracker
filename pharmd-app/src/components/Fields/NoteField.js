import React from "react";
import tw, { styled } from "twin.macro";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import NoteIcon from "../Basic/NoteIcon";
import { NOTE } from "../../constants/apiObjects";

const Info = styled.div`
  ${tw`fontStyle-6 text-black font-medium`}
  width: 100%;
  padding-bottom: 10px;
  font-size: 0.89em;
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

const DateLabel = styled.h4`
  font-weight: normal;
  font-size: 0.85em;
  margin: 0px 0px 0px 0.5em;
  color: ${props => props.theme.palette.tertiary.main};
`;

const Content = styled.div`
  height: 3em;
  line-height: 1em;
  overflow: hidden;
  margin-top: 0.4em;
  word-break: break-all;
`;

const NoteField = ({ record, source }) => {
  const title = record[NOTE.TITLE];
  const body = record[NOTE.BODY];
  const date = new Date(record[NOTE.DATE]).toLocaleString();

  return (
    <Info>
      <Heading>
        <Title>{title}</Title>
        <NoteIcon src={EditIcon} color="black" size="small" isPrimary="primary" />
      </Heading>
      <Time>
        <NoteIcon src={AccessTimeIcon} color="grey" size="inherit" />
        <DateLabel>{date}</DateLabel>
      </Time>
      {/* if the length of string is more than 2 lines - ask jose how to check for this */}
      <Content>
        <p>{body}</p>
      </Content>
      {/*  add a contional where if 3 or more...  */}
      {/* use QuickChipField for the chip component */}
    </Info>
  );
};

export default NoteField;
