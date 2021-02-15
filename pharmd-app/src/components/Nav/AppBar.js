/**
 * Description:
 * This Component creates a transparent app bar used to display the
 * current user location. It also provides the ability to use
 * breadcrumbs to navigate to previus locations
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import PropTypes from "prop-types";

// Style Imports
import tw, { styled } from "twin.macro";

// Component Imports
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import RouterBreadcrumb from "../Basic/Breadcrumb";

// -------------------------- STYLE --------------------------
const AppBarStyled = styled(MuiAppBar)`
  ${tw`shadow-none h-24`}
`;

const Title = styled.p`
  ${tw`fontStyle-10 m-0 text-gray-700`}
`;

const Toolbar = styled(MuiToolbar)`
  ${tw`absolute bottom-0`}
`;

// -------------------------- COMPONENT --------------------------
const AppBar = ({ title, location, children, props }) => (
  <AppBarStyled color="transparent" position="relative" {...props}>
    <Toolbar disableGutters>
      <div>
        <RouterBreadcrumb locTest={location} />
        <Title>{title}</Title>
      </div>
      {children}
    </Toolbar>
  </AppBarStyled>
);

AppBar.defaultProps = {};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  children: PropTypes.element
};

export default AppBar;
