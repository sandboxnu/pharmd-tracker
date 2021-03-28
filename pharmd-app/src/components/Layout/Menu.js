import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getResources, usePermissions } from "react-admin";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import NavItemLink from "../Nav/NavItemLink";
import NavIndicator from "../Nav/NavIndicator";

const Menu = ({ onMenuClick, logout, ...props }) => {
  const location = props.location.pathname;
  const { permissions } = usePermissions();
  const hiddenResources = ["studentCourses", "studentExams"];
  let resources = useSelector(getResources).filter(val => !hiddenResources.includes(val.name));
  if (permissions === "user") {
    resources = resources.filter(val => val.name !== "upload");
  }
  const flat = resources.reduce((total, val) => total.concat(val.name), []);

  const getCurrentIndex = () => {
    // TEMPORARY SOLUTION WILL FIND A BETTER ONE THAT RELOADS ONLY IF NEEDE
    const currentIndex = flat.indexOf(location.split("/")[1]);
    return currentIndex;
  };

  return (
    <div>
      {resources.map((resource, index) => {
        const isActive = location.includes(resource.name);
        const linkProps = {
          key: resource.name || index,
          to: `/${resource.name}`,
          title: (resource.options && resource.options.label) || resource.name,
          iconSrc: resource.icon,
          onClick: onMenuClick,
          sidebarIsOpen: false,
          isActive
        };
        if (index === 0) {
          return (
            <Fragment key={index}>
              <NavItemLink {...linkProps} />
              <Divider variant="middle" />
            </Fragment>
          );
        }
        return <NavItemLink {...linkProps} />;
      })}

      <NavIndicator index={getCurrentIndex()} />
      {logout}
    </div>
  );
};

export default withRouter(Menu);
