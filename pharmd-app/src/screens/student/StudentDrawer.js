// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useSelector } from "react-redux";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { useListController } from "react-admin";

// Component Imports
import DrawerMaterial from "@material-ui/core/Drawer";
import StudentQuickView from "./StudentQuickView";
import ExpansionPanel from "../../components/Basic/ExpansionPanel";
import NavItemSecondary from "../../components/Nav/NavItemSecondary";
import VerticalSplitIcon from "../../assets/icons/verticalSplit.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import PersonIcon from "../../assets/icons/person.svg";
import StudentDrawerFilter from "./StudentDrawerFilter";

// Style Imports
import tw, { styled } from "twin.macro";

const DeatilsButton = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background-color: #4573ee;
  margin: 20px 65px 10px 65px;
  padding: 13px 15px;
  border-radius: 8px;
  font-size: 1.3em;
`;

const ButtonSpan = styled.span`
  width: 100%;
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

const StudentDrawer = ({ isOpenMatch, selected, handleClose, handleOpen, ...props }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);
  const isDrawerOpen = isOpen || isOpenMatch;

  console.log("LIST CONTROLLER");
  console.log(useListController(props));
  // Avoid route errors
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
      <div>No Student selected</div>
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
            title="Table Filters"
            iconSrc={FilterIcon}
            onClick={handleOpen}
            isOpen
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
              title="Student Quickview"
              iconSrc={PersonIcon}
              onClick={handleOpen}
              isOpen
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
