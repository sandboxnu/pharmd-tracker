import React, {Fragment} from "react";

import tw, {styled} from "twin.macro";
import Paper from "@material-ui/core/Paper";

import AppBar from "../../components/Nav/AppBar";

import StudentDetailsSide from "./StudentDetailsSide";
import {Loading, useGetOne} from "react-admin";
import StudentDetailsContentGrid from "./StudentDetailsContentGrid";
import StudentNoteDrawer from "../student/StudentNoteDrawer";
import PharmDModal from "../../components/Layout/PharmDModal";
import {setNotesModal} from "../../redux/actions";
import NoteCreate from "../../components/Layout/NoteCreate";
import { useSelector, useDispatch } from "react-redux";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  margin-right: 24.75em;
  flex-grow: 1;
`;

const SideContent = styled(Paper)`
  position: fixed;
  right: 0;
  &.MuiPaper-root {
    ${tw`w-99`}
    height: 100vh;
  }
`;

const StudentDetailsScreen = props => {
    const {data, loading, error} = useGetOne('students', props.match.params.id);
    const dispatch = useDispatch();
    const isNotesModalOpen = useSelector(state => state.notesModalOpen)
    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <p>Error, id: {id} is not found</p>;
    }
    return (
        <Fragment>
            <MainContent>
                <AppBar title={`${data.lastName}, ${data.firstName}`}/>
                <StudentDetailsContentGrid record={data}/>
                <StudentNoteDrawer source={data}/>
            </MainContent>

            <SideContent>
                <StudentDetailsSide source={data} {...props} />
            </SideContent>
            <PharmDModal open={isNotesModalOpen} title="Add Note"
                         onClose={() => dispatch(setNotesModal({isOpen: false}))}>
                <NoteCreate {...props} onSuccess={() => dispatch(setNotesModal({isOpen: false}))}/>
            </PharmDModal>
        </Fragment>
    );
};

export default StudentDetailsScreen;
