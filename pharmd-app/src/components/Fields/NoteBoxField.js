import React from 'react'
import GridCard from "../Basic/GridCard";
import tw, { styled } from "twin.macro";
import PropTypes from 'prop-types';
import MuiPaper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChipField from "./ChipField";
import NoteIcon from "../Basic/NoteIcon";
import EditIcon from "@material-ui/icons/EditOutlined";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {NOTE} from "../../constants/apiObjects";

const CardRoot = styled.div`
    flex-grow: 1;
    margin: 15px;
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl h-48 w-48 shadow-cardLight`}
  padding: 20px;
  margin: auto;
  max-width: 400
`;

const NoteTitle = styled.h3`
    color: ${props => props.theme.palette.secondary.main};
`

const NoteDate = styled.p`
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

const NoteMore = styled(Button)`
    position: absolute;
    bottom: 5;
    right: 5;
`

const NoteEdit = styled.span`
    position: absolute;
    right: 5;
    top: 5
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

    return (
        <CardRoot>
            <Paper>
                <Grid container spacing={2} direction="column">
                    <Grid container xs>
                        <Grid item xs={11}>
                            <NoteTitle>{title}</NoteTitle>
                        </Grid>
                        <Grid item xs={1}>
                            <NoteEdit>
                                <IconButton aria-label="edit" onClick={edit}>
                                    <NoteIcon src={EditIcon} color="black" size="small" isPrimary={"primary"}/>
                                </IconButton>
                            </NoteEdit>
                        </Grid>
                    </Grid>
                    {/*Date*/}
                    <Grid item>
                        <NoteDate>{date}</NoteDate>
                    </Grid>
                    {/*Tags*/}
                    <Grid item xs>
                        {tags.map((tag, ind) => <ChipField key={ind} pillSize="small"/>)}
                    </Grid>
                    {/*Content*/}
                    <Grid container xs>
                        <Grid item xs={10} zeroMinWidth>
                            <NoteContent>{body}</NoteContent>
                        </Grid>
                        <Grid item xs={2}>
                            <NoteMore>More</NoteMore>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </CardRoot>
    )
}

export default NoteBoxField;