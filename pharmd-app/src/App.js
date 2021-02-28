import React from "react";
import "./styles/App.css";
import { Admin, Resource } from "react-admin";
import students from "./screens/student/index.js";
import upload from "./screens/upload/index.js";
import profile from "./screens/profile/index.js";
import courses from "./screens/courses";
import Dashboard from "./Dashboard";

import { AuthProvider, DataProvider } from "./services";
import createLigthTheme from "./themes/light-theme";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import DashboardLayout from "./components/Layout/DashboardLayout";
import studentSideBarReducer from "./redux/reducers/studentSideBarReducer";
import customRoutes from "./config/customRoutes";

const App = () => {
  return (
    <ThemeProvider theme={createLigthTheme()}>
      <ThemeConsumer>
        {theme => (
          <Admin
            layout={DashboardLayout}
            dataProvider={DataProvider}
            authProvider={AuthProvider}
            dashboard={Dashboard}
            theme={theme}
            customReducers={{ studentSidebarOpen: studentSideBarReducer }}
            customRoutes={customRoutes}
          >
            <Resource name="users" {...profile} />
            <Resource name="students" {...students}/>
            <Resource name="courses" {...courses} />
            <Resource name={"studentCourses"}/>
            <Resource name="upload" {...upload} />
          </Admin>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default App;
