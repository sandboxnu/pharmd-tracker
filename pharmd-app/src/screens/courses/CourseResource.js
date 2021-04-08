import React from "react";

import tw, { styled } from "twin.macro";

import AppBar from "../../components/Nav/AppBar";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const CourseResource = props => {
  return (
    <>
      <MainContent>
        <AppBar title="Courses" />
      </MainContent>
    </>
  );
};

export default CourseResource;
