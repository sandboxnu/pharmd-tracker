import React, { useState, useEffect } from "react";
import { Diez, DesignLanguage } from "diez-pharmd-design";
import "./styles/App.css";
import { Admin, Resource } from "react-admin";
import students from "./screens/student/index.js";
import upload from "./screens/upload/index.js";
import profile from "./screens/profile/index.js";
import Dashboard from "./Dashboard";

import { AuthProvider } from './services'

import selectTheme from "./themes/selected-theme";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import DashboardLayout from "./components/Layout/DashboardLayout";
import dataProvider from "./dataProvider";
import courses from "./screens/courses";
import customRoutes from "./config/customRoutes";
import customReducers from './redux/reducers';

function themeSwitch(theme) {
  console.log(theme);
  var d = document.documentElement;

  if (theme === "dark") {
    d.classList.add("theme-dark");
  } else {
    d.classList.remove("theme-dark");
  }
}

const App = () => {
  const [ds, setDs] = useState();
  const diez = new Diez(DesignLanguage);
  const [theme, setTheme] = useState("ligth");

  useEffect(() => {
    // Here we are observing hot updates to our design language.
    //
    // Since this instance of Diez was initialized with DesignLanguage, it will deliver updates to the DesignLanguage
    // object described in `src/DesignLanguage.ts` (relative to the root of the Diez project).
    diez.attach(setDs);
  }, []);

  if (typeof ds === "undefined") {
    return null;
  }

  themeSwitch(theme);

  return (
    <ThemeProvider theme={selectTheme(ds, theme)}>
      <ThemeConsumer>
        {theme => (
          <Admin
            layout={DashboardLayout}
            dataProvider={dataProvider}
            authProvider={AuthProvider}
            dashboard={Dashboard}
            theme={theme}
            customReducers={customReducers}
            customRoutes={customRoutes}
          >
            <Resource name="users" {...profile} />
            <Resource name="students" {...students} />
            <Resource name="courses" {...courses} />
            <Resource name="upload" {...upload} />
          </Admin>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default App;
