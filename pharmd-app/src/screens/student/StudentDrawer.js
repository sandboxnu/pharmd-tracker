/**
 * Description:
 * This component contains the content within the side panel (filters and student preview)
 *     and the side panel itself.
 * TODO:
 *   - Clicking on a student from the student list no longer opens the side bar and no longer opens the student preview expansion panel within the sidebar.
 * Date: 02-06-2021
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState, useEffect } from "react";
import { useListController } from "react-admin";
import { useSelector } from "react-redux";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

// Component Imports
import DrawerMaterial from "@material-ui/core/Drawer";
import ExpansionPanel from "../../components/Basic/ExpansionPanel";
import FilterIcon from "../../assets/icons/filter.svg";
import NavItemSecondary from "../../components/Nav/NavItemSecondary";
import PersonIcon from "../../assets/icons/person.svg";
import StudentDrawerFilter from "./StudentDrawerFilter";
import StudentQuickView from "./StudentQuickView";
import VerticalSplitIcon from "../../assets/icons/verticalSplit.svg";

// Style Imports
import tw, { styled } from "twin.macro";

//-------------------------- STYLE --------------------------

const ButtonSpan = styled.span`
  width: 100%;
`;

const DeatilsButton = styled.button`
  background-color: #4573ee;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1.3em;
  margin: 20px 65px 10px 65px;
  padding: 13px 15px;
`;


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

//-------------------------- COMPONENT --------------------------

/**
 * Returns a Drawer that contains both filters and student expansion panels.
 * - Expansion panels are open if the drawer is open and the state of the expansion panel is true
 * - Expansion panels are closed if the drawer is closed or the state of the expansion panel is false
 * - Filter and student preview close when side bar is closed, and open when clicked.
 *
 * @param isOpenMatch the boolean representing if the user selected a student
 * @param selected the ID of the student that has been selected by the user
 * @param handleClose
 * @param handleOpen
 * @param props
 * @returns <Drawer> Component with Expansion Panels
 * @constructor
 */
const StudentDrawer = ({ isOpenMatch, selected, handleClose, handleOpen, ...props }) => {
  // the state of the sidebar retrieved from redux
  const isOpen = useSelector(state => state.studentSidebarOpen);

  // the drawer should be open if the drawer was manually opened or the user clicked on a student in the table
  const isDrawerOpen = isOpen || isOpenMatch;
  const [filtersQuickViewExpanded, setFiltersQuickViewExpanded] = useState(false);

  // onChange functions for when the expansion panel is clicked on:
  const changeFiltersExpansionPanel = () => {
    isOpen ? setFiltersQuickViewExpanded(!filtersQuickViewExpanded) :
      setFiltersQuickViewExpanded(true);
  };

  const changeStudentExpansionPanel = () => {
    isOpen ? props.setStudentQuickViewExpanded(!props.studentQuickViewExpanded) :
      props.setStudentQuickViewExpanded(true);
  };

  //Avoid route errors
  const quickview = () => {
    return isOpenMatch ? (
      <>
        <StudentQuickView id={selected} onCancel={handleClose} {...props} />
        <ButtonSpan>
          <RouterLink to={`/students/${props.id}/details`}>
            <DeatilsButton>More Student Info</DeatilsButton>
          </RouterLink>
        </ButtonSpan>
      </>
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
        defaultExpanded={isDrawerOpen}
        expanded={isDrawerOpen && filtersQuickViewExpanded}
        onChange={changeFiltersExpansionPanel}
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
        defaultExpanded={isDrawerOpen}
        expanded={isDrawerOpen && props.studentQuickViewExpanded}
        onChange={changeStudentExpansionPanel}
      />
    </Drawer>
  );
};

export default StudentDrawer;
