/**
 * Description:
 *
 * TODO:
 * Date:
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";

// Style Imports
import tw, { styled } from "twin.macro";

// Component Imports
import { NavLink } from "react-router-dom";
import MenuItemMaterial from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "../Basic/Tooltip";
import Icon from "../Basic/Icon";
import Box from "@material-ui/core/Box";

// const NavLinkRef = forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
const activeClassname = "NavItemLink-Active" + btoa(Math.random());

// Styled Components

const Item = styled(({ className, ...props }) => (
  <MenuItemMaterial {...props} classes={{ root: className }} />
))`
  ${tw`w-18 h-18 p-0 fontStyle-7`}
  ${props =>
    props.sidebarIsOpen
      ? tw`w-full h-18 p-0 fontStyle-7`
      : tw`w-18 h-18 p-0 fontStyle-7`}
  
  .MuiListItemIcon-root {
    flex-grow: ${props => (props.sidebarIsOpen ? 0 : 1)};
    ${tw`flex justify-center w-18`}
  }

  &.${activeClassname} {
    // Currently Empty
  }
`;

const IconItem = styled(ListItemIcon)`
  flex-grow: 1;
  ${tw`flex justify-center`}
`;

const NavItemSecondary = (
  { className, title, iconSrc, onClick, sidebarIsOpen, isActive, ...props },
  ref
) => {
  // Navigate to Route
  const handleMenuTap = useCallback(
    e => {
      onClick && onClick(e);
    },
    [onClick]
  );

  // Main Nav item
  const renderNavItem = () => {
    return (
      <Item
        activeClassName={activeClassname}
        //   component={NavLinkRef}
        ref={ref}
        {...props}
        onClick={handleMenuTap}
        sidebarIsOpen={sidebarIsOpen}
      >
        {iconSrc && (
          <IconItem>
            <Icon
              src={iconSrc}
              color={isActive ? "primary" : "tertiary"}
              size={"large"}
              accessibleTitle={title}
            />
          </IconItem>
        )}
        {sidebarIsOpen && title}
      </Item>
    );
  };

  // Render tooltip if nav is open
  if (sidebarIsOpen) {
    return renderNavItem();
  } else {
    return (
      <Tooltip title={title} placement={"left"}>
        {/* DIV ensures hover works */}
        <div style={{ width: "fit-content" }}>{renderNavItem()}</div>
      </Tooltip>
    );
  }
};

// Props required by component
NavItemSecondary.propTypes = {
  className: PropTypes.string,
  iconSrc: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.node,
  staticContext: PropTypes.object, // Left in case if we use static routes
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sidebarIsOpen: PropTypes.bool,
  isActive: PropTypes.bool
};

export default NavItemSecondary;
