import React, {cloneElement, useState} from 'react'
import tw, { styled } from "twin.macro";
import MuiGrid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/HelpOutline";
import LeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import RightIcon from '@material-ui/icons/ChevronRightOutlined';
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
    Pagination,
    useQuery,
    Loading,
    Error
} from "react-admin";
import NoteBoxField from "../../components/Fields/NoteBoxField";
import MuiPaper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from "../../components/Basic/NoteIcon";
import EditIcon from "@material-ui/icons/EditOutlined";

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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl shadow-cardLight`}
  padding: 15px;
  margin: 20px;
 `

const NoteDrawerContainer = styled(Paper)`
    
`

const NotesTitle = styled.h2`
    color: ${props => props.theme.palette.secondary.main};
`

const NotesHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StudentNoteDrawer = ({record = {}, source }) => {
    const [page, setPage] = useState(0);

    const { data, loading, error } = useQuery({
        type: 'getManyReference',
        resource: 'notes',
        payload: {
            target: 'student',
            id: record[source],
            pagination: {
                page: 1,
                perPage: 3
            },
            sort: {
                field: '',
                order: ''
            }
        }
    })

    function getDataPage(data) {
        const cursor = page*3;
        return data.slice(cursor, cursor + 3);
    }

    const totalPages = () => Math.ceil(data.length / 3)
    const onLastPage = () => page === totalPages() - 1;
    const onFirstPage = () => page === 0;

    function pagesDisplay() {
        return `${page + 1} / ${totalPages()}`
    }

    function flipPage(isIncrement) {
        isIncrement ? setPage(page + 1) : setPage(page - 1);
    }

    if (loading) return <Loading />
    if (error) return <Error error="Cannot load student's notes"/>
    if (!data) return null

    return (
        <NoteDrawerContainer>
            <NotesHeader>
                <NotesTitle>Notes</NotesTitle>
                <div>
                    <IconButton aria-label="left" onClick={() => flipPage(false)} disabled={onFirstPage()}>
                        <NoteIcon src={LeftIcon} color={onFirstPage() ? "gray" : "black"} size="large" isPrimary={"primary"}/>
                    </IconButton>
                    <IconButton aria-label="right" onClick={() => flipPage(true)} disabled={onLastPage()}>
                        <NoteIcon src={RightIcon} color={onLastPage() ? "gray" : "black"} size="large" isPrimary={"primary"}/>
                    </IconButton>
                    {pagesDisplay()}
                </div>
            </NotesHeader>

            <NoteGrid container spacing={2} direction="row">
                {getDataPage(data).map(note => {
                    return <NoteBoxField source='id' record={note} />
                })}
            </NoteGrid>
        </NoteDrawerContainer>
    )
}

const StudentNoteDrawer2 = ({ source, ...props }) => {
    return (
        <Paper>
            {/*<NoteGrid container spacing={10} direction="row">*/}
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
                    <BulkActionsToolbar>
                        {props.bulkActionButtons}
                    </BulkActionsToolbar>
                    <NoteBoxField props={source} {...props} />
                </ListBase>
            {/*</NoteGrid>*/}
        </Paper>
    )
}

export default StudentNoteDrawer;