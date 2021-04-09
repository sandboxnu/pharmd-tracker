// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useCallback } from "react";
import PropTypes from "prop-types";
// Style Imports
import tw, { styled } from "twin.macro";
// Component Imports
import MenuItemMaterial from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "../Basic/Tooltip";
import Icon from "../Basic/Icon";

const activeClassname = `NavItemLink-Active${btoa(Math.random())}`;

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
    <Tooltip title={title} placement="left">
      <div tw="w-fitContent">{renderNavItem()}</div>
    </Tooltip>
  );
};

NavItemSecondary.propTypes = {
  className: PropTypes.string,
  iconSrc: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.node,
  staticContext: PropTypes.object,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sidebarIsOpen: PropTypes.bool,
  isActive: PropTypes.bool
};

export default NavItemSecondary;
