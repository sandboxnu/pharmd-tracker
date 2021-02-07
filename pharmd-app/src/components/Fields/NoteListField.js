import React from "react";
import { useDispatch } from "react-redux";
import { setNotesModal } from "../../redux/actions";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import { useGetOne } from "react-admin";
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

const Loading = styled.p`
    font-size: 120%;
    color: gray;
`;

const Error = styled.p`
    font-size: 120%;
    color: red;
`;

const NoNotes = styled.h3`
  ${tw`fontStyle-6 font-medium block`}
  font-size: 0.9em;
  color: black;
  font-weight: bold;
`;

const Heading = styled.div`
  margin-top: 1em;
  align-items: center;
  display: inline-flex;
  height: auto;
`;


const NoteListField = ({ record = {}, source = "notes" }) => {

    const dispatch = useDispatch();

    function addNote() {
        dispatch(setNotesModal({ isOpen: true }))
    }

    // Should be an array of note IDs
    let notes = record[source] || [];

    return (
        <Notes>
            <Heading>
                <Label>Recent Notes</Label>
                <IconButton onClick={addNote}>
                    <NoteIcon src={AddCircleOutlineOutlinedIcon} size="small" isPrimary="primary" />
                </IconButton>
            </Heading>
            { notes.length === 0 ? <NoNotes>No notes to show!</NoNotes> :
                notes.map((note, index) => {
                    const { data, loading, error } = useGetOne("notes", note);
                    //let data = note.data;

                    if (loading) {
                        return <Loading key={index}>loading...</Loading>
                    }

                    if (error) {
                        console.error(error)
                        return <Error key={error}>Error loading note: {error}</Error>
                    }

                    return <NoteField
                        text={data.text}
                        title={data.title}
                        lastEdit={data.lastEdit}
                        created={data.created}
                        id={data.id} />
                })
            }
        </Notes>
    );
};

export default NoteListField;
