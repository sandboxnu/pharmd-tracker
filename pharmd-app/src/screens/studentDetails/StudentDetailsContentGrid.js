/**
 *
 * This component determines the main layout of the StudentDetails Screen
 */

import React from "react";

import tw, {styled} from "twin.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import {Show, Tab, TabbedShowLayout} from "react-admin";

import StudentCourseList from "./StudentCourseList";

const MainGrid = styled(Grid)`
  ${tw`pt-12 `}
`;

const StudentDetailsContentGrid = ({ record }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);

  return (
    <MainGrid container spacing={6}>
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={12} md={isOpen ? 4 : 3} tw="transition-1">
          <Paper tw="paperStyle">{/* <Chart /> */}</Paper>
        </Grid>
        <Grid item xs={12} md={isOpen ? 4 : 3} tw="transition-1">
          <Paper tw="paperStyle" />
        </Grid>
        <Grid item xs={12} md={isOpen ? 4 : 3} tw="transition-1">
          <Paper tw="paperStyle" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Show
          resource={'students'}
          basePath={`/students/${record.id}/details`}
          id={record.id}
        >
          <TabbedShowLayout>
            <Tab label={'Courses'}>
              <StudentCourseList/>
            </Tab>
          </TabbedShowLayout>
        </Show>
      </Grid>
    </MainGrid>
  );
};

export default StudentDetailsContentGrid;
