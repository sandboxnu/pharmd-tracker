import React, { useCallback, Fragment } from "react";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

import AppBar from "../../components/Nav/AppBar";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const UploadScreen = props => {
  return (
    <Fragment>
      <MainContent>
        <AppBar title="Upload" />
      </MainContent>
    </Fragment>
  );
};

export default UploadScreen;