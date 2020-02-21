import React from 'react';
import { Admin, Resource } from 'react-admin';
import students from './students/index.js';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/kev1n80/demo');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="students" {...students}/>
  </Admin>
);

export default App;
