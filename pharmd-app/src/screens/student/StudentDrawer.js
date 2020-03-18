import React, { useState, useEffect } from "react";

import DrawerMaterial from "@material-ui/core/Drawer";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import StudentQuickView from "./StudentQuickView";
import { useSelector } from "react-redux";
import { StudentFilter } from "./StudentFilter";
import { SharedFilterConsumer, SharedFilterProvider } from "./FilterContext";
import { ReferenceInput, SelectInput, TextInput, Filter } from "react-admin";
const Drawer = styled(DrawerMaterial)`

transition: ${props =>
  props.open
    ? props.theme.transitions.create("width", {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.enteringScreen
      })
    : props.theme.transitions.create("width", {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.leavingScreen
      })};

  &.MuiDrawer-root {
    ${props => (props.open ? tw`w-99` : tw`w-18`)}
  }

  .MuiDrawer-paper {
    width: inherit;
    /* ${props => (props.open ? tw`w-28` : tw`w-18`)} */
  }
`;

const StudentDrawer = ({ isOpenMatch, selected, handleClose, handleOpen, ...props }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);

  // const {
  //   filterValues, // dynamically set via the UI by the user
  //   ...rest
  // } = { props, ...controllerProps };

  console.log(isOpen);

  return (
    <Drawer
      variant="permanent"
      open={isOpen || isOpenMatch}
      anchor="right"
      onClose={handleClose}
    >
      {/* Avoid route errors*/}
      {isOpen || isOpenMatch ? (
        isOpenMatch ? (
          <div>
            <button onClick={handleClose}>close</button>
            <StudentQuickView id={selected} onCancel={handleClose} {...props} />
          </div>
        ) : (
          <div>
            <button onClick={handleClose}>close</button>
            {/* <Filter filterValues={filterValues} {...props} {...rest}>
              <TextInput label="Search" source="q" alwaysOn />
              <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Filter> */}
            {/* <StudentFilter /> */}
          </div>
        )
      ) : (
        <div>
          <button onClick={handleOpen}>open</button>
        </div>
      )}
    </Drawer>
  );
};

export default StudentDrawer;
