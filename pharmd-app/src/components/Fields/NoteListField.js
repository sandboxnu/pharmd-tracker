import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import { useQuery, Loading, Error } from "react-admin";
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
  const { data, loading, error } = useQuery({
    type: 'getNotes',
    resource: 'students',
    payload: { id: record[source] }
  });

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <Notes>
      <Label>Recent Notes</Label>
      {data.map((note) => {
        return <NoteField source='id' record={note}/>
      })
      }
    </Notes>
  );
};

export default NoteListField;
