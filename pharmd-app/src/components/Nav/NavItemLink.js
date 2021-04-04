// -------------------------- IMPORTS --------------------------

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

const NavLinkRef = forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
const activeClassname = `NavItemLink-Active${btoa(Math.random())}`;

// -------------------------- STYLE --------------------------
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

// -------------------------- COMPONENT --------------------------
const NavItemLink = forwardRef(
  ({ className, title, iconSrc, onClick, sidebarIsOpen, isActive, ...props }, ref) => {
    // Navigate to Route
    const handleMenuTap = useCallback(
      e => {
        onClick && onClick(e);
      },
      [onClick]
    );

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
                size="large"
                accessibleTitle={title}
              />
            </IconItem>
          )}
          {sidebarIsOpen && title}
        </Item>
      );
    };

    if (sidebarIsOpen) {
      return renderNavItem();
    }
    return (
      <Tooltip title={title}>
        <div tw="w-fitContent">{renderNavItem()}</div>
      </Tooltip>
    );
  }
);

NavItemLink.propTypes = {
  className: PropTypes.string,
  iconSrc: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.node,
  staticContext: PropTypes.object,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sidebarIsOpen: PropTypes.bool,
  isActive: PropTypes.bool
};

export default NavItemLink;
