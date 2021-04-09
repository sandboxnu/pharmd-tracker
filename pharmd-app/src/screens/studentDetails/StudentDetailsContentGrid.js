/**
 * This component determines the main layout of the StudentDetails Screen
 */
import React from "react";
import { List as ListRA } from "react-admin";
import tw, { styled } from "twin.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { useSelector } from "react-redux";

import StudentDetailsList from "./StudentDetailsList";

const List = styled(ListRA)`
  ${tw`p-4 bg-white`}
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 13px rgba(0, 0, 0, 0.07),
    0 3px 10px rgba(0, 0, 0, 0.03);

  .content {
    ${tw`shadow-none`}
  }
`;

const MainGrid = styled(Grid)`
  ${tw`pt-12 `}
`;

const StudentDetailsContentGrid = ({ source, ...props }) => {
  const isOpen = true;
  return (
    <MainGrid container spacing={6}>
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={12} md={isOpen ? 4 : 3} tw="transition-1">
          <Paper tw="paperStyle" />
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
