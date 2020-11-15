/**
 * Description:
 * TODO:\Creates the main students screen
 * FIXME: Some Boolean logic error doesn't allow the quickview
 *        sidebar to open when a table is clicked for the first time
 * Date: 04-23-2020$
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import { STUDENT_QUICKVIEW, STUDENTS_MAIN } from "../../constants/routes";

// Component Imports
import AppBar from "../../components/Nav/AppBar";
import StudentContentGrid from "./StudentContentGrid";
import StudenttDrawer from "./StudentDrawer";

// Style Imports
import tw, { styled } from "twin.macro";

//-------------------------- STYLE --------------------------

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

//-------------------------- COMPONENT --------------------------

const StudentScreen = props => {
  // Route history is used by the componnet to decide
  // if it shouuld show the sidebar
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    history.push(STUDENTS_MAIN);
    dispatch(setStudentSideBar({ isOpen: false }));
  }, [history]);

  const handleOpen = useCallback(() => {
    dispatch(setStudentSideBar({ isOpen: true }));
  }, []);

  return (
    <Route path={STUDENT_QUICKVIEW}>
      {({ match }) => {
        // Double negative
        const isMatch = !!(match && match.params && match.params.id !== "create");

        return (
          <Fragment>
            <MainContent>
              <AppBar title="Students" />
              <StudentContentGrid
                selected={isMatch && parseInt(match.params.id, 10)}
                {...props}
              />
            </MainContent>

            <StudenttDrawer
              isOpenMatch={isMatch}
              id={isMatch ? match.params.id : 0}
              handleClose={handleClose}
              handleOpen={handleOpen}
              {...props}
            />
          </Fragment>
        );
      }}
    </Route>
  );
};

export default StudentScreen;
