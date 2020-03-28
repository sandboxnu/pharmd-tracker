import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

import AppBar from "../../components/Nav/AppBar";
import StudentContentGrid from "./StudentContentGrid";
import StudenttDrawer from "./StudentDrawer";
import { useDispatch, useSelector } from "react-redux";
import { setStudentSideBar } from "../../redux/actions";
import { useListController, getListControllerProps } from "ra-core";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const StudentScreen = props => {
  // console.log("RESOURCE", props);
  // console.log("CONTROLLER", props, useListController(props));
  const history = useHistory();
  // const { ...rest } = { ...props, ...useListController(props) };
  // const controllerProps = getListControllerProps(rest);
  // console.log("REST", rest, controllerProps);

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    history.push("/students");
    dispatch(setStudentSideBar({ isOpen: false }));
  }, [history]);

  const handleOpen = useCallback(() => {
    dispatch(setStudentSideBar({ isOpen: true }));
  }, []);

  return (
    <Route path="/students/:id">
      {({ match }) => {
        // Double negative

        const isMatch = !!(match && match.params && match.params.id !== "create");
        // isMatch && dispatch(setStudentSideBar({ isOpen: isMatch }));

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

// import React, { useCallback, Fragment } from "react";
// import { Route, useHistory } from "react-router-dom";
// import StudentList from "./StudentList";
// import { List, SimpleForm } from "react-admin";
// import Drawer from "@material-ui/core/Drawer";
// import StudentEdit from "./StudentEdit";

// const StudentListMain = props => {
//   const history = useHistory();

//   const handleClose = useCallback(() => {
//     history.push("/students");
//   }, [history]);

//   return (
//     <Route path="/students/:id">
//       {({ match }) => {
//         // Double negative
//         const isMatch = !!(match && match.params && match.params.id !== "create");

//         return (
//           <Fragment>
//             <List {...props}>
//               <StudentList selectedRow={isMatch && parseInt(match.params.id, 10)} />
//             </List>
//             <Drawer varient="persistent" open={isMatch} anchor="right" onClose={handleClose}>
//               {/* Avoid route errors*/}
//               {isMatch ? (
//                 <StudentEdit id={match.params.id} onCancel={handleClose} {...props} />
//               ) : null}
//             </Drawer>
//           </Fragment>
//         );
//       }}
//     </Route>
//   );
// };
