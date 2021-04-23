import React from "react";
import { useDispatch } from "react-redux";
import { setNotesModal } from "../../redux/actions";
import { useQuery, Loading, Error } from "react-admin";
import tw, { styled } from "twin.macro";
import NoteField from "./NoteField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NoteIcon from "../Basic/NoteIcon";

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
    type: "getManyReference",
    resource: "notes",
    payload: {
      target: "student",
      id: record[source],
      pagination: {
        page: 1,
        perPage: 10 // TODO: how many per page?
      },
      sort: {
        field: "", // TODO: Backend doesn't currently handle sorting for notes
        order: ""
      }
    }
  });

  const dispatch = useDispatch();

  function addNote() {
    dispatch(setNotesModal({ isOpen: true }))
  }

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <Notes>
      <Label>Recent Notes</Label>
      <IconButton onClick={addNote}>
        <NoteIcon src={AddCircleOutlineOutlinedIcon} size="small" isPrimary="primary" />
      </IconButton>
      {data.map((note, ind) => {
        return <NoteField source='id' record={note} key={ind}/>
      })
      }
    </Notes>
  );
};

export default NoteListField;
