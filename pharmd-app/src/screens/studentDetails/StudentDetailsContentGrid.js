/**
 *
 * This component determines the main layout of the StudentDetails Screen
 */

import React from "react";

import { List as ListRA, useListController } from "react-admin";

import tw, { styled } from "twin.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useFilterState, useListParams } from "ra-core";
import { StudentFilter } from "../student/StudentToolbarFilter";

import StudentDetailsList from "./StudentDetailsList";
// import Grow from "@material-ui/core/Grow";

const List = styled(ListRA)`
  ${tw`p-4 bg-white`}
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 13px rgba(0, 0, 0, 0.07),
    0px 3px 10px rgba(0, 0, 0, 0.03);

  .content {
    ${tw`shadow-none`}
  }
`;

const MainGrid = styled(Grid)`
  ${tw`pt-12 `}
`;

const StudentDetailsContentGrid = ({ source, ...props }) => {
  console.log("PRPS MAIN GRID", props);
  // console.log("LIST", useListController(props));
  const isOpen = useSelector(state => state.studentSidebarOpen);
  console.log("GRID", props);
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
        <List
          // filters={<StudentFilter />}
          // filter={{ gpa_gte: 2, gpa_lte: 3 }}
          basePath={`/students/${props.id}/details`}
          resource="courses"
          bulkActionButtons={false}
          {...props}
          classes={{ content: "content" }}
        >
          <StudentDetailsList props={source} {...props} />
        </List>
      </Grid>
    </MainGrid>
  );
};

export default StudentDetailsContentGrid;
