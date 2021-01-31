//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { Fragment } from "react";

// Component Imports
import AppBar from "../../components/Nav/AppBar";
import { List as RaList } from "react-admin";
import CourseList from "./CourseList";
import { CourseFilter } from "./CourseFilter";

// Style Imports
import styled from "styled-components/macro";
import tw from "tailwind.macro";

//-------------------------- STYLE --------------------------

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

//-------------------------- COMPONENT --------------------------

const CourseResource = props => {
  return (
    <Fragment>
      <MainContent>
        <AppBar title="Courses" />
          <List
            bulkActionButtons={false}
            filters={<CourseFilter/>}
            {...props}
          >
            <CourseList/>
          </List>
      </MainContent>
    </Fragment>
  );
};

export default CourseResource;
