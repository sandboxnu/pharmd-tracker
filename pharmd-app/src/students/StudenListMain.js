import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";
import StudentList from "./StudentList";
import { List, SimpleForm } from "react-admin";
import Drawer from "@material-ui/core/Drawer";
import StudentEdit from "./StudentEdit";

const StudentListMain = props => {
  const history = useHistory();

  const handleClose = useCallback(() => {
    history.push("/students");
  }, [history]);

  return (
    <Route path="/students/:id">
      {({ match }) => {
        // Double negative
        const isMatch = !!(match && match.params && match.params.id !== "create");

        return (
          <Fragment>
            <List {...props}>
              <StudentList selectedRow={isMatch && parseInt(match.params.id, 10)} />
            </List>
            <Drawer varient="persistent" open={isMatch} anchor="right" onClose={handleClose}>
              {/* Avoid route errors*/}
              {isMatch ? (
                <StudentEdit id={match.params.id} onCancel={handleClose} {...props} />
              ) : null}
            </Drawer>
          </Fragment>
        );
      }}
    </Route>
  );
};

export default StudentListMain;
