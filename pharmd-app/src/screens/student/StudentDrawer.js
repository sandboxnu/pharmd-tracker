// Function Imports
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useListController } from "react-admin";

// Component Imports
import DrawerMaterial from "@material-ui/core/Drawer";
import tw, { styled } from "twin.macro";
import { useSelector } from "react-redux";
import ExpansionPanel from "../../components/Basic/ExpansionPanel";
import NavItemSecondary from "../../components/Nav/NavItemSecondary";
import VerticalSplitIcon from "../../assets/icons/verticalSplit.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import PersonIcon from "../../assets/icons/person.svg";
import StudentDrawerFilter from "./StudentDrawerFilter";
import StudentQuickView from "./StudentQuickView";

// Style Imports

/**
 * Description:
 * This Component creates a toggleable sidebar panel with Filters to filter student data and a Quick View containing
 *     information of a student that the user clicked on in the data grid.
 *
 * Date: 03-25-2021
 */

// -------------------------- IMPORTS --------------------------

// -------------------------- STYLE --------------------------

const ButtonSpan = styled.span`
  width: 100%;
`;

const DetailsButton = styled.button`
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

    let isDrawerOpen = props.studentSidebar;

    const [filtersQuickViewExpanded, setFiltersQuickViewExpanded] = useState(false);

    // onChange functions for when the expansion panel is clicked on:
    // The toggles only toggle when the sidebar is open, otheriwse they close
    const toggleFiltersExpansionPanel = () => {
      if(isDrawerOpen){
        setFiltersQuickViewExpanded(!filtersQuickViewExpanded)
      }
      else{
        setFiltersQuickViewExpanded(true);
        openSidebar();
      }

    };


    const toggleStudentExpansionPanel = () => {
      if(isDrawerOpen){
        props.setStudentQuickViewExpanded(!props.studentQuickViewExpanded)
      }
      else{
        props.setStudentQuickViewExpanded(true);
        openSidebar();
      }
    };

    const closeSidebar = () => {
      props.setStudentSidebar(false);
    }

    const openSidebar = () => {
      props.setStudentSidebar(true);
    }


    const toggleStudentSidebar = () => {
      props.setStudentSidebar(!props.studentSidebar);
    }



// Avoid route errors
    const quickview = () => {
      return isOpenMatch ? (
        <>
          <StudentQuickView id={selected}  {...props} />
          <ButtonSpan>
            <RouterLink to={`/students/${props.id}/details`}>
              <DetailsButton>More Student Info</DetailsButton>
            </RouterLink>
          </ButtonSpan>
        </>
      ) : (
        <div>No Student selected</div>
      );
    };

    return (

      <Drawer variant="permanent" open={props.studentSidebar} anchor="right" onClose={closeSidebar}>
        <NavItemSecondary
          title={isDrawerOpen ? "Close" : "Open"}
          iconSrc={VerticalSplitIcon}
          onClick={toggleStudentSidebar}
          isOpen={isDrawerOpen}
          isActive={isDrawerOpen}
        />
        <ExpansionPanel
          SummaryChild={

            <NavItemSecondary
              title="Table Filters"
              iconSrc={FilterIcon}
              onClick={toggleFiltersExpansionPanel}
              sidebarIsOpen={props.studentSidebar}
            />

          }
          DetailChild={<StudentDrawerFilter {...useListController(props)} />}
          defaultExpanded={false}
          expanded={props.studentSidebar && filtersQuickViewExpanded}
          onChange={toggleFiltersExpansionPanel}
        />
        <ExpansionPanel
          SummaryChild={
            <>
              <NavItemSecondary
                title="Student Quickview"
                iconSrc={PersonIcon}
                onClick={toggleStudentExpansionPanel}
                sidebarIsOpen={props.studentSidebar}
              />
            </>
          }
          DetailChild={quickview()}
          defaultExpanded={false}
          expanded={props.studentSidebar && props.studentQuickViewExpanded}
          onChange={toggleStudentExpansionPanel}
        />
      </Drawer>
    );
  }
;


export default StudentDrawer;
