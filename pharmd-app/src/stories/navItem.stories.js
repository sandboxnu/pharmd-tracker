import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TestIcon from "../assets/icons/student.svg";
import NavItemLink from "../components/Nav/NavItemLink";

export const Default = () => {
  const ref = React.createRef();

  return (
    <Router>
      <NavItemLink
        key="Screen"
        to="/Screen"
        title="Screen"
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        ref={ref}
      />
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
        title="Screen"
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        isActive
        ref={ref}
      />
    </Router>
  );
};
