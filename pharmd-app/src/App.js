// import React from 'react';
// import { Admin, Resource } from 'react-admin';
// import students from './students/index.js';
// import jsonServerProvider from 'ra-data-json-server';
// import Dashboard from './Dashboard';
// import authProvider from './authProvider';

// const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/kev1n80/demo');
// const App = () => (
//   <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
//     <Resource name="students" {...students}/>
//   </Admin>
// );

// export default App;

import React, { useState, useEffect } from "react";
import { Diez, DesignLanguage } from "diez-pharmd-design";
import "./styles/App.css";
import { Admin, Resource } from "react-admin";
import students from "./students/index.js";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

import selectTheme from "./themes/selected-theme";
import { ThemeProvider, ThemeConsumer } from "styled-components";
const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/kev1n80/demo");

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
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            theme={theme}
          >
            <Resource name="students" {...students} />
          </Admin>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default App;
