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

        const pathnames = loc.pathname
          .split("/")
          .filter(x => x)
          .filter(w => !w.includes("show")); // Remove Show Breadcrumbs

        return (
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter color="inherit" to="/">
              Home
            </LinkRouter>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              // Route Location Link
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

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
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
