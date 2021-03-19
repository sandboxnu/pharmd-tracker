import React, {cloneElement} from 'react'
import tw, { styled } from "twin.macro";
import MuiGrid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/HelpOutline";
import {
    List,
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    ListBase,
    ListToolbar,
    BulkActionsToolbar,
    Button,
    sanitizeListRestProps,
    Pagination
} from "react-admin";
import StudentNoteBox from "./StudentNoteBox";
import MuiPaper from "@material-ui/core/Paper";
import IconButton from "../../components/Basic/IconButton";

const NotesActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar {...sanitizeListRestProps(rest)}>
            <CreateButton basePath={basePath} />
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults} />
            {/*Custom Action*/}
            <IconButton color='red' src={HelpIcon()} />
        </TopToolbar>
    )
}

const notesExporter = (records, fetchRelatedRecords) => {

}

const NoteGrid = styled(MuiGrid)`
    overflow-x: auto;
    flex-wrap: nowrap;
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl shadow-cardLight`}
  padding: 30px;
 `

const StudentNoteDrawer = ({ source, ...props }) => {
    return (
        <Paper>
            <NoteGrid container spacing={10} direction="row">
                <ListBase {...props}
                      basePath={`/students/${props.id}/details`}
                      resource="notes"
                      actions={<NotesActions />}
                      bulkActionButtons={false}
                      >
                    <h2>Notes</h2>
                    <ListToolbar
                        filters={props.filters}
                        actions={props.actions}
                    />
                    <Paper>
                        <BulkActionsToolbar>
                            {props.bulkActionButtons}
                        </BulkActionsToolbar>
                        <StudentNoteBox props={source} {...props} />
                    </Paper>
                </ListBase>
                    {/*<StudentNoteBox id={2} title="Note 1" body="Cool text here!" date={new Date()} tags={["foo", "boo", "goo"]} />*/}
                    {/*<StudentNoteBox id={2} title="Note 1" body="Cool text here!" date={new Date()} />*/}
                    {/*<StudentNoteBox id={2} title="Note 1" body="Cool text here!" date={new Date()} />*/}
            </NoteGrid>
        </Paper>
    )
}

export default StudentNoteDrawer;