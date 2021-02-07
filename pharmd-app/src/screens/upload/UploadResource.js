import React, { useCallback, Fragment } from "react";

import tw, { styled } from "twin.macro";

import AppBar from "../../components/Nav/AppBar";
import SpreadsheetUploader from "./components/SpreadsheetUploader";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const UploadScreen = props => {
  return (
    <Fragment>
      <MainContent>
        <AppBar title="Upload" />
        <SpreadsheetUploader />
      </MainContent>
    </Fragment>
  );
};

export default UploadScreen;
