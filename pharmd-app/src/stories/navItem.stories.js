import React, { createRef } from "react";
import TestIcon from "../assets/icons/student.svg";
import { BrowserRouter as Router } from "react-router-dom";
import NavItemLink from "../components/Nav/NavItemLink";
import NavItemSecondary from "../components/Nav/NavItemSecondary";
export default {
  title: "Nav Item",
  component: NavItemLink
};

export const Default = () => {
  const ref = React.createRef();

  return (
    <Router>
      <NavItemLink
        key="Screen"
        to="/Screen"
        title={"Screen"}
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        ref={ref}
      ></NavItemLink>
    </Router>
  );
};

export const Active = () => {
  const ref = React.createRef();

  return (
    <Router>
      <NavItemLink
        key="Screen"
        to="/Screen"
        title={"Screen"}
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        isActive={true}
        ref={ref}
      ></NavItemLink>
    </Router>
  );
};

export const Secondary = () => {
  return (
    <NavItemSecondary
      key="Screen"
      title={"Screen"}
      iconSrc={TestIcon}
      onClick={() => {}}
      isOpen={false}
      isActive={true}
      sidebarIsOpen={true}
    ></NavItemSecondary>
  );
};
