import React from "react";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import LinkMaterial from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Link = styled(LinkMaterial)`
  ${tw`fontStyle-3 m-0 text-gray-600`}
`;

const CurrentLink = styled.p`
  ${tw`fontStyle-3 m-0 text-gray-500`}
`;

const breadcrumbNameMap = {
  "/students": "Students",
  "/courses": "Courses",
  "/upload": "Upload"
};

const getName = (to, value) => {
  if (!isNaN(value) && to.includes(`students/${value}`)) {
    return "Quickview";
  } else if (to.includes(`show`)) {
    return "Quickview";
  } else if (to.includes(`details`)) {
    return "Details";
  } else {
    // Check if route predefined
    let val = breadcrumbNameMap[to];
    return val ? val : value;
  }
};

const LinkRouter = props => <Link {...props} component={RouterLink} />;

// location Param added just for storybook testing
export default function RouterBreadcrumb(locTest) {
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
            console.log("PATH", to, value);

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
                <LinkRouter color="inherit" to={to} key={to}>
                  {getName(to, value)}
                </LinkRouter>
              );
            }
          });
          return crumbs;
        };
        return (
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter color="inherit" to="/">
              Home
            </LinkRouter>
            {generateCrumbs()}
            {/* {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              // Route Location Link
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              console.log("PATH", to, value);
              if (!isNaN(value)) {
                return <></>;
              }
              if (isLast) {
                // Does not have a link
                return <CurrentLink key={to}>{getName(to, value)}</CurrentLink>;
              } else {
                return (
                  // Linkable
                  <LinkRouter color="inherit" to={to} key={to}>
                    {getName(to, value)}
                  </LinkRouter>
                );
              }
            })} */}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
