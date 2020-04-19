// in src/MyLayout.js
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
import {
  //   Menu,
  Notification,
  Sidebar,
  setSidebarVisibility,
  ComponentPropType,
  Layout
} from "react-admin";
import Menu from "./Menu";
import AppBar from "../Nav/AppBar";

const MyAppBar = props => <></>;

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "white",
    height: "100%",
    width: "96px",
    marginTop: "0px",
    position: "fixed"
  }
});

const useLayoutStyles = makeStyles({
  appFrame: {
    marginTop: "0px",
    flexDirection: "row"
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: 0
  }
});

const MySidebar = props => {
  const classes = useSidebarStyles();
  return <Sidebar style={{ width: "96px" }} classes={classes} {...props} />;
};

const DashboardLayout = props => {
  console.log("Notification", Notification);
  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      sidebar={MySidebar}
      menu={Menu}
      notification={Notification}
      classes={useLayoutStyles()}
    />
  );
};

export default DashboardLayout;
