// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

// Style Imports
import tw from "twin.macro";
import { makeStyles } from "@material-ui/core/styles";
import { Notification, Sidebar, Layout } from "react-admin";
import Menu from "./Menu";

const MyAppBar = props => <></>;

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "white",
    height: "100%",
    width: "96px",
    marginTop: "0px",
    position: "fixed",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 13px, rgba(0, 0, 0, 0.03) 0px 3px 10px"
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
  return <Sidebar tw="w-96px z-max" classes={classes} {...props} />;
};

const DashboardLayout = props => {
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
