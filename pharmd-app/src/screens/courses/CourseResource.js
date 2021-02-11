import React, { useCallback, Fragment } from "react";

import tw, { styled } from "twin.macro";

import AppBar from "../../components/Nav/AppBar";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const CourseResource = props => {
  return (
    <Fragment>
      <MainContent>
        <AppBar title="Courses" />
      </MainContent>
    </Fragment>
  );
};

export default CourseResource;
