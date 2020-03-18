import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuItemMaterial from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Tooltip from "../Basic/Tooltip";
import Icon from "../Basic/Icon";
import Box from "@material-ui/core/Box";

const NavLinkRef = forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
const activeClassname = "NavItemLink-Active" + btoa(Math.random());

// Styled Components

const Item = styled(({ className, ...props }) => (
  <MenuItemMaterial {...props} classes={{ root: className }} />
))`
  ${tw`w-24 h-24 p-0`}

  .MuiListItemIcon-root {
    flex-grow: 1;
    ${tw`flex justify-center`}
  }

  &.${activeClassname} {
    // Currently Empty
  }
`;

const IconItem = styled(ListItemIcon)`
  flex-grow: 1;
  ${tw`flex justify-center`}
`;

const NavItemLink = forwardRef(
  ({ className, title, iconSrc, onClick, sidebarIsOpen, isActive, ...props }, ref) => {
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
          component={NavLinkRef}
          ref={ref}
          {...props}
          onClick={handleMenuTap}
        >
          {iconSrc && (
            <IconItem>
              <Icon
                src={iconSrc}
                color={isActive ? "primary" : "inherit"}
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
        <Tooltip title={title}>
          {/* DIV ensures hover works */}
          <div style={{ width: "fit-content" }}>{renderNavItem()}</div>
        </Tooltip>
      );
    }
  }
);

// Props required by component
NavItemLink.propTypes = {
  className: PropTypes.string,
  iconSrc: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.node,
  staticContext: PropTypes.object, // Left in case if we use static routes
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sidebarIsOpen: PropTypes.bool,
  isActive: PropTypes.bool
};

export default NavItemLink;
