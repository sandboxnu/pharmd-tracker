/**
 * Description:
 * TODO:\Creates the main students screen
 * FIXME: Some Boolean logic error doesn't allow the quickview
 *        sidebar to open when a table is clicked for the first time
 * Date: 04-23-2020$
 */
// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useCallback, useState } from "react";
import { Route, useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import tw, { styled } from "twin.macro";
// import { setStudentSideBar } from "../../redux/actions";
import { STUDENT_QUICKVIEW, STUDENTS_MAIN } from "../../constants/routes";
// Component Imports
import AppBar from "../../components/Nav/AppBar";
import StudentContentGrid from "./StudentContentGrid";
import StudentDrawer from "./StudentDrawer";

// -------------------------- STYLE --------------------------
const MainContent = styled.div`
  ${tw`p-12 pt-2 flex-grow`}
`;

// -------------------------- COMPONENT --------------------------
const StudentScreen = props => {

  const [studentQuickViewExpanded, setStudentQuickViewExpanded] = useState(false);

  return (
    <Route path={STUDENT_QUICKVIEW}>
      {({ match }) => {
        const isMatch = match && match.params && match.params.id !== "create"; // has the user selected a new student

        return (
          <>
            <MainContent>
              <AppBar title="Students" />
              <StudentContentGrid
                selected={isMatch && parseInt(match.params.id, 10)}
                studentQuickViewExpanded={studentQuickViewExpanded}
                setStudentQuickViewExpanded={setStudentQuickViewExpanded}
                studentSidebar={studentSidebar}
                setStudentSidebar={setStudentSidebar}

                {...props}
              />
            </MainContent>

            <StudentDrawer
              isOpenMatch={isMatch}
              id={isMatch ? match.params.id : 0}
              studentQuickViewExpanded={studentQuickViewExpanded}
              setStudentQuickViewExpanded={setStudentQuickViewExpanded}
              studentSidebar={studentSidebar}
              setStudentSidebar={setStudentSidebar}
              {...props}
            />
          </>
        );
      }}
    </Route>
  );
};

export default StudentScreen;
