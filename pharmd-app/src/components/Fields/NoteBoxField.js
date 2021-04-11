import React from 'react'
import tw, { styled } from "twin.macro";
import MuiPaper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {NOTE} from "../../constants/apiObjects";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import BasicTag from "../Basic/BasicTag";
import NoteIcon from "../Basic/NoteIcon";

const CardRoot = styled.div`
    flex-grow: 1;
    margin: 15px;
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl h-56 w-56 shadow-cardLight`}
  padding: 7px;
  margin: auto;
  
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
`

const NoteBoxField = ({ record, source }) => {
    const id = record[NOTE.ID];
    const title = record[NOTE.TITLE];
    const body = record[NOTE.BODY];
    const tags = record[NOTE.TAGS];
    const date = new Date(record[NOTE.DATE]).toLocaleDateString();

    function edit() {
        console.log(`Editing note with ID: ${id}`)
        console.log(`This note also has tags: ${tags}`)
    }

    function deleteNote() {
        console.log("deleting note with iD" + id)
    }

    return (
        <CardRoot>
            <Paper>

                    <CardHeader
                        action={
                            <div>
                                <IconButton aria-label="settings" onClick={edit}>
                                    <NoteIcon src={EditIcon} color="black" />
                                </IconButton>
                                <IconButton aria-label="settings" onClick={deleteNote}>
                                    <NoteIcon src={DeleteIcon} color="red" />
                                </IconButton>
                            </div>
                        }
                        title={title}
                        subheader={date}
                    />
                    <CardContent>
                        <p>
                            {body}
                        </p>
                        <Tags>
                            {tags.map((tag, ind) => {
                                if (ind < 2) {
                                    return <BasicTag text={tag}/>;
                                } else {
                                    const more = `${tags.length - 2} more`
                                    return <BasicTag text={more} />
                                }

                            })}
                        </Tags>

                    </CardContent>
            </Paper>
        </CardRoot>
    )
}

export default NoteBoxField;