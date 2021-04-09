/**
 *
 * This component determines the main layout of the StudentDetails Screen
 */

import React from "react";

import tw, { styled } from "twin.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Show, Tab, TabbedShowLayout, TabbedShowLayoutTabs } from "react-admin";

import StudentCourseList from "./StudentCourseList";
import StudentExamList from "./StudentExamList";

const MainGrid = styled(Grid)`
  ${tw`pt-12 `}
`;

const StyledCard = styled(Card)`
  ${tw`paperStyle`}
  height: auto;
`;

const StyledTabLayout = styled(TabbedShowLayout)`
  .MuiDivider-root {
    display: none;
  }
`;

const StyledTabs = withStyles({
  root: {
    padding: "30px"
  },
  indicator: {
    display: "none"
  }
})(TabbedShowLayoutTabs);

const StyledTab = styled(Tab)`
  ${tw`fontStyle-6 font-medium`}
  text-transform: none;
  color: ${props => (props.selected ? "#F0F4FF" : "#4573ee")};
  background: ${props => (props.selected ? "#4573ee" : "#F0F4FF")};
  border-radius: 14px;
  margin-right: 16px;
`;

const StudentDetailsContentGrid = props => {
  const isOpen = useSelector(state => state.studentSidebarOpen);
  const { record } = props;

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
          resource="students"
          basePath={`/students/${record.id}/details`}
          id={record.id}
          component={StyledCard}
        >
          <StyledTabLayout syncWithLocation={false} tabs={<StyledTabs {...props} />}>
            <StyledTab label="Courses">
              <StudentCourseList />
            </StyledTab>
            <StyledTab label="Exams">
              <StudentExamList />
            </StyledTab>
          </StyledTabLayout>
        </Show>
      </Grid>
    </MainGrid>
  );
};

export default StudentDetailsContentGrid;
