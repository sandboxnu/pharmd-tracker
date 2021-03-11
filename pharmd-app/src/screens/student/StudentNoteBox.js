import React from 'react'
import GridCard from "../../components/Basic/GridCard";
import tw, { styled } from "twin.macro";
import PropTypes from 'prop-types';
import MuiPaper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChipField from "../../components/Fields/ChipField";
import NoteIcon from "../../components/Basic/NoteIcon";
import EditIcon from "@material-ui/icons/EditOutlined";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const CardRoot = styled.div`
    flex-grow: 1;
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl h-64 w-64 shadow-cardLight`}
  padding: 20px;
  margin: auto;
  max-width: 500
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

const StudentNoteBox = ({id, date, title, body, tags}) => {
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
                                <IconButton aria-label="edit">
                                    <NoteIcon src={EditIcon} color="black" size="small" isPrimary={"primary"}/>
                                </IconButton>
                            </NoteEdit>
                        </Grid>
                    </Grid>
                    {/*Date*/}
                    <Grid item>
                        <NoteDate>{date.toDateString()}</NoteDate>
                    </Grid>
                    {/*Tags*/}
                    <Grid item xs>
                        {tags.map(tag => <ChipField pillSize="small"/>)}
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


        // <Paper isShrunk={false}>
        //     <NoteTitle>{title}</NoteTitle>
        //     <NoteDate>{date.toDateString()}</NoteDate>
        //     <NoteContent>{body}</NoteContent>
        // </Paper>
    )
}

StudentNoteBox.propTypes = {
    id: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    body: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
}

StudentNoteBox.defaultProps = {
    id: "",
    date: new Date(),
    title: "",
    body: "",
    tags: []
}

export default StudentNoteBox;