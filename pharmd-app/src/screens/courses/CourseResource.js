// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { Fragment } from "react";

// Component Imports
import { List as RaList } from "react-admin";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import AppBar from "../../components/Nav/AppBar";
import CourseList from "./CourseList";
import { CourseFilter } from "./CourseFilter";

// Style Imports

// -------------------------- STYLE --------------------------

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const List = styled(RaList)`
  ${tw`p-6 bg-white rounded-xl`}
  margin-top: 50px;

  .MuiPaper-elevation1 {
    box-shadow: none;
  }
`;

// -------------------------- COMPONENT --------------------------

const CourseResource = props => {
  return (
    <>
      <MainContent>
        <AppBar title="Courses" />
        <List bulkActionButtons={false} filters={<CourseFilter />} {...props}>
          <CourseList />
        </List>
      </MainContent>
    </>
  );
};

export default CourseResource;
