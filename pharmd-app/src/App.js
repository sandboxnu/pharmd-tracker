import React from 'react';
import { Admin, Resource } from 'react-admin';
import student from './student';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/kev1n80/demo');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="student" {...student}/>
  </Admin>
);

export default App;
