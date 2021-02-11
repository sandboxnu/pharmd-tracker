import React from 'react'
import GridCard from "../../components/Basic/GridCard";
import styled from 'twin.macro';

const NoteTitle = styled.h2`
    color: ${props => props.theme.palette.secondary.main};
`

const NoteDate = styled.h4`
  font-size: .85em;
  color: ${props => props.theme.palette.tertiary.main};
`;

const NoteContent = styled.div`
  height: 3em;
  line-height: 1em;
  overflow: hidden;
  margin-top: .4em;
  word-break: break-all;
`

const StudentNoteBox = ({id, date, title, body, tags}) => {
    return (
        <GridCard isShrunk={false}>
            <NoteTitle>{title}</NoteTitle>
            <NoteDate>{date}</NoteDate>
            <NoteContent>{body}</NoteContent>
        </GridCard>
    )
}

export default StudentNoteBox;