/**
 * This Component creates a transparent app bar used to display the
 * current user location. It also provides the ability to use
 * breadcrumbs to naviaget to previus locations
 *
 */

import React from "react";
import AppBarMaterial from "@material-ui/core/AppBar";
import ToolbarMaterial from "@material-ui/core/Toolbar";
import RouterBreadcrumb from "../Basic/Breadcrumb";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

const AppBarStyled = styled(AppBarMaterial)`
  ${tw`shadow-none h-24`}
`;

const Title = styled.p`
  ${tw`fontStyle-10 m-0 text-gray-700`}
`;

const Toolbar = styled(ToolbarMaterial)`
  ${tw`absolute bottom-0`}
`;

const AppBar = ({ title, location, children, props }) => (
  <AppBarStyled color="transparent" position="relative" {...props}>
    <Toolbar disableGutters={true}>
      <div>
        <RouterBreadcrumb locTest={location} />
        <Title>{title}</Title>
      </div>
      {/* Incase if any toolbar action buttons are added to the component */}
      {children}
    </Toolbar>
  </AppBarStyled>
);

export default AppBar;
