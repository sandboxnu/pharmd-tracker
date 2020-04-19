import React, { useCallback, Fragment } from "react";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

import AppBar from "../../components/Nav/AppBar";

import { useShowController } from "react-admin";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const StudentDetailsScreen = props => {
  console.log("PROPS", props.match.params.id);
  //   const controllerProps = useShowController(props);
  //   if (!controllerProps.record) {
  //     return null;
  //   }
  return (
    <Fragment>
      <MainContent>
        <AppBar title={`Student Details ${props.match.params.id}`} />
      </MainContent>
    </Fragment>
  );
};

export default StudentDetailsScreen;
