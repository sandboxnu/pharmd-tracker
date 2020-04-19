import React from "react";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import { useGetOne } from "react-admin";
import NoteField from "./NoteField";

const Label = styled.h1`
  ${tw`fontStyle-6 font-medium inline-flex`}
  font-size: 1.3em;
  color: black;
  font-weight: bold;
`;

const Notes = styled.div`
  margin-top: 12px;
`;


const NoteListField = ({ record = {}, source }) => {
    let notes = record[source];

    return (
        <Notes>
            <Label>Recent Notes</Label>
            <NoteField />
            <NoteField />
        </Notes>
    );
};

export default NoteListField;
