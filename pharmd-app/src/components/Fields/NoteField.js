import React, {useState} from "react";
import { useUpdate } from "react-admin";
import tw, { styled } from "twin.macro";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import CheckIcon from '@material-ui/icons/CheckOutlined';
import NoteIcon from "../Basic/NoteIcon";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';


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
`;

const NoteInput = styled(TextField)`
    margin: 2px;
    width: 100%;
`;

const Loading = styled.p`
    font-size: 120%;
    color: gray;
`;

const NoteField = ({ text, title, lastEdit, created, id }) => {
    const [editing, setEditing] = useState(false);
    const [noteText, setNoteText] = useState(text);
    const [updating, setUpdating] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const [update, {loading, error}] = useUpdate('notes', id, noteText)
    if (error) {
        setErrorMessage(true);
    }


    function toggleEdit() {
        if (editing) {
            // Update note text
            setUpdating(true);

            // Make call to data provider--update this note
            update();
            setTimeout(() => setUpdating(false), 1000)
            setEditing(false);
        } else {
            // Start editing
            setEditing(true);
        }
    }

    function handleChange(event) {
        setNoteText(event.target.value)
    }

    return (
        <React.Fragment>
            <Info>
                <Heading>
                    <Title>{title}</Title>
                    <IconButton onClick={toggleEdit} disabled={updating}>
                        <NoteIcon src={editing ? CheckIcon : EditIcon} color="black" size="small"
                                  isPrimary={"primary"}/>
                    </IconButton>

                </Heading>
                <Time>
                    <NoteIcon src={AccessTimeIcon} color="grey" size="inherit"/>
                    <Date>Created: {created.toString()}</Date>
                </Time>
                {lastEdit && lastEdit.getTime() !== created.getTime() &&
                    <Time>
                        <NoteIcon src={AccessTimeIcon} color="grey" size="inherit"/>
                        <Date>Last edit:: {lastEdit.toString()}</Date>
                    </Time>
                }

                {
                    updating ? <Loading>Updating...</Loading> :
                    editing ?
                        <NoteInput multiline defaultValue={noteText} label="Note Text..." onChange={handleChange}/>
                        : <Content><p>{noteText}</p></Content>
                }

                {/*  add a contional where if 3 or more...  */}
                {/* use QuickChipField for the chip component */}

            </Info>
        </React.Fragment>
    );
};

export default NoteField;
