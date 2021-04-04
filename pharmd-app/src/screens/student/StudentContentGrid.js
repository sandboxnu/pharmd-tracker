/**
 * Description:
 * This component determines the main layout of the StudentDetails Screen
 * TODO:
 *      - Add detail cards
 * Date: 04-23-2020
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// Component Imports
import { List as RaList } from "react-admin";
import MuiGrid from "@material-ui/core/Grid";

// Style Imports
import tw, { styled } from "twin.macro";
import { StudentFilter } from "./StudentToolbarFilter";
import StudentList from "./StudentList";
import GridCard from "../../components/Basic/GridCard";
import StudenttDrawer from "./StudentDrawer";

// -------------------------- STYLE --------------------------
const List = styled(RaList)`
  ${tw`p-6 rounded-xl bg-white shadow-cardLight`}

  .content {
    ${tw`shadow-none`}
  }
`;

const MainGrid = styled(MuiGrid)`
  ${tw`pt-12 `}
`;

// -------------------------- COMPONENT --------------------------
const StudentContentGrid = ({ selected, ...props }) => {
  const isOpen = useSelector(state => state.studentSidebarOpen);

  return (
    <MainGrid container spacing={6}>
      <MuiGrid container item xs={12} spacing={6}>
        {[...Array(3)].map((e, i) => (
          <GridCard key={i} isShrunk={isOpen} {...props}>
            {`GridItem-${i}`}
          </GridCard>
        ))}
      </MuiGrid>
      <MuiGrid item xs={12}>
        <List
          filters={<StudentFilter />}
          bulkActionButtons={false}
          {...props}
          classes={{ content: "content" }}
        >
          <StudentList
            selectedRow={selected}
            setStudentQuickViewExpanded={props.setStudentQuickViewExpanded}
            studentQuickViewExpanded={props.studentQuickViewExpanded}
            studentSidebar={props.studentSidebar}
            setStudentSidebar={props.setStudentSidebar}
          />
        </List>
      </MuiGrid>
    </MainGrid>
  );
};

StudentContentGrid.defaultProps = {};

StudentContentGrid.propTypes = {
  selected: PropTypes.any
};

export default StudentContentGrid;
