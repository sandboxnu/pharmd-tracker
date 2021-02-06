import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import RouterBreadcrumb from "../Basic/Breadcrumb";

const AppBarStyled = styled(MuiAppBar)`
  ${tw`shadow-none h-24`}
`;

const Title = styled.p`
  ${tw`fontStyle-10 m-0 text-gray-700`}
`;

const Toolbar = styled(MuiToolbar)`
  ${tw`absolute bottom-0`}
`;

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
