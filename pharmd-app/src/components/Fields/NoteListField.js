import React from "react";
import { useQuery, Loading, Error } from "react-admin";
import tw, { styled } from "twin.macro";
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
  const { data, loading, error } = useQuery({
    type: 'getManyReference',
    resource: 'notes',
    payload: { 
      target: 'student', 
      id: record[source],
      pagination: {
        page: 1,
        perPage: 10, // TODO: how many per page?
      },
      sort: {
        field: '', // TODO: Backend doesn't currently handle sorting for notes
        order: '',
      }
     }
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
