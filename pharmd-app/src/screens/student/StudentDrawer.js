import React, { useState, useEffect } from "react";

import DrawerMaterial from "@material-ui/core/Drawer";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import StudentQuickView from "./StudentQuickView";
import { useSelector } from "react-redux";
import ExpansionPanel from "../../components/Basic/ExpansionPanel";
import NavItemSecondary from "../../components/Nav/NavItemSecondary";
import VerticalSplitIcon from "../../assets/icons/verticalSplit.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import PersonIcon from "../../assets/icons/person.svg";
import Icon from "../../components/Basic/Icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { useListController } from "react-admin";
import StudentDrawerFilter from "./StudentDrawerFilter";
// const LinkRouter = props => <Link {...props} component={RouterLink} />;

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
    align-items: flex-end;
    /* ${props => (props.open ? tw`w-28` : tw`w-18`)} */
  }
`;

const StudentDrawer = ({ isOpenMatch, selected, handleClose, handleOpen, ...props }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);
  const isDrawerOpen = isOpen || isOpenMatch;

  //Avoid route errors
  const quickview = () => {
    return isOpenMatch ? (
      <div>
        <button onClick={handleClose}>close</button>
        <StudentQuickView id={selected} onCancel={handleClose} {...props} />
        <RouterLink to={`/students/${props.id}/details`}>Student Details</RouterLink>
      </div>
    ) : (
      <div>{"No Student selected"}</div>
    );
  };

  return (
    <Drawer variant="permanent" open={isDrawerOpen} anchor="right" onClose={handleClose}>
      <NavItemSecondary
        title={isDrawerOpen ? "Close" : "Open"}
        iconSrc={VerticalSplitIcon}
        onClick={isDrawerOpen ? handleClose : handleOpen}
        isOpen={isDrawerOpen}
        isActive={isDrawerOpen}
      />
      <ExpansionPanel
        SummaryChild={
          <NavItemSecondary
            title={"Table Filters"}
            iconSrc={FilterIcon}
            onClick={handleOpen}
            isOpen={true}
            isActive={false}
            sidebarIsOpen={isDrawerOpen}
          />
        }
        DetailChild={<StudentDrawerFilter {...useListController(props)} />}
        expand={false}
      />
      <ExpansionPanel
        SummaryChild={
          <>
            <NavItemSecondary
              title={"Student Quickview"}
              iconSrc={PersonIcon}
              onClick={handleOpen}
              isOpen={true}
              isActive={false}
              sidebarIsOpen={isDrawerOpen}
            />
          </>
        }
        DetailChild={quickview()}
        expand={isDrawerOpen}
      />
    </Drawer>
  );
};

export default StudentDrawer;
