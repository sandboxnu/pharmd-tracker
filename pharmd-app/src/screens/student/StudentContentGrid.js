/**
 *
 * This component determines the main layout of the Student Screen
 */

import React from "react";

import { List as ListRA } from "react-admin";
import StudentList from "./StudentList";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { StudentFilterSetUp } from "./StudentFilter";
import { SharedFilterProvider } from "./FilterContext";

// import Grow from "@material-ui/core/Grow";

const paperStyle = {
  height: "252px",
  borderRadius: "16px",
  boxShadow:
    "0px 1px 2px rgba(0,0,0,0.05), 0px 2px 13px rgba(0,0,0,0.07), 0px 3px 10px rgba(0,0,0,0.03)"
};

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

const StudentContentGrid = ({ selected, ...props }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);
  console.log("GRID", props);
  return (
    <MainGrid container spacing={6}>
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={12} md={isOpen ? 4 : 3}>
          <Paper style={paperStyle}>{/* <Chart /> */}</Paper>
        </Grid>
        <Grid item xs={12} md={isOpen ? 4 : 3}>
          <Paper style={paperStyle}></Paper>
        </Grid>
        <Grid item xs={12} md={isOpen ? 4 : 3}>
          <Paper style={paperStyle}></Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List bulkActionButtons={false} {...props} classes={{ content: "content" }}>
          <StudentList selectedRow={selected} />
        </List>
      </Grid>
    </MainGrid>
  );
};

export default StudentContentGrid;
