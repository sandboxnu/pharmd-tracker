/**
 * Description:
 * Component creates breadcrumbs linking to different routes
 * TODO:
 * Date: 04-23-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { Route, MemoryRouter } from "react-router";
import PropTypes from "prop-types";

// Component Imports
import { Link as RouterLink } from "react-router-dom";
import MuiLink from "@material-ui/core/Link";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";

// Style Imports
import styled from "styled-components/macro";
import tw from "twin.macro";
import { MAP_BREADCRUMB_NAME } from "../../constants/mappers";
import {
  STUDENT_DETAILS_TITLE,
  STUDENT_QUICKVIEW_TITLE,
  HOME_TITLE
} from "../../constants/text";
import { STUDENTS_MAIN, HOME_MAIN } from "../../constants/routes";

//-------------------------- STYLE --------------------------

const Link = styled(MuiLink)`
  ${tw`fontStyle-3 m-0 text-gray-600`}
`;

const CurrentLink = styled.p`
  ${tw`fontStyle-3 m-0 text-gray-500`}
`;

//-------------------------- FUNCTIONS --------------------------\

const getName = (to, value) => {
  if (!isNaN(value) && to.includes(`${STUDENTS_MAIN}/${value}`)) {
    return STUDENT_QUICKVIEW_TITLE;
  } else if (to.includes(`show`)) {
    return STUDENT_QUICKVIEW_TITLE;
  } else if (to.includes(`details`)) {
    return STUDENT_DETAILS_TITLE;
  } else {
    // Check if route predefined
    let val = MAP_BREADCRUMB_NAME[to];
    return val ? val : value;
  }
};

//-------------------------- COMPONENT --------------------------

// Change MUI Link component to router library link component
export const BreadcrumbLink = props => <Link {...props} component={RouterLink} />;

// location Param added just for storybook testing
function RouterBreadcrumb(locTest) {
  return (
    <Route>
      {({ location }) => {
        // Split Path names into array
        // For Testing
        const loc = locTest.locTest ? locTest.locTest : location;
        console.log("ROUTE LOCATIONS", loc);
        const pathnames = loc.pathname.split("/").filter(x => x);
        // .filter(w => !w.includes("show")); // Remove Show Breadcrumbs

        const generateCrumbs = () => {
          let crumbs = [];
          pathnames.forEach((value, index) => {
            const isLast = index === pathnames.length - 1;
            // Route Location Link
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            // Filters used to remove certain routes
            // if (!isNaN(value)) { // Remove Number IDs Incase if quickview is not included
            if (value === "show") {
              return;
            }

            if (isLast) {
              // Does not have a link
              crumbs.push(<CurrentLink key={to}>{getName(to, value)}</CurrentLink>);
            } else {
              // Linkable
              crumbs.push(
                <BreadcrumbLink color="inherit" to={to} key={to}>
                  {getName(to, value)}
                </BreadcrumbLink>
              );
            }
          });
          return crumbs;
        };
        return (
          <MuiBreadcrumbs aria-label="breadcrumb">
            <BreadcrumbLink color="inherit" to={HOME_MAIN}>
              {HOME_TITLE}
            </BreadcrumbLink>
            {generateCrumbs()}
          </MuiBreadcrumbs>
        );
      }}
    </Route>
  );
}

RouterBreadcrumb.defaultProps = {};

RouterBreadcrumb.propTypes = {
  locTest: PropTypes.string
};

export default RouterBreadcrumb;
