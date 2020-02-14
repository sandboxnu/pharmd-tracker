/*
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { StudentsList, StudentEdit, StudentCreate } from './students';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/kev1n80/demo');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="students" list={StudentsList} edit={StudentEdit} create={StudentCreate} icon={UserIcon} />
  </Admin>
);

export default App;
*/


import React from 'react';
import { Admin, Resource } from 'react-admin';
import { StatusList } from './status';
import { StudentList, StudentEdit, StudentCreate } from './students';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import StudentIcon from '@material-ui/icons/Group';
import StatusIcon from '@material-ui/icons/Book';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/kev1n80/demo');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="students" list={StudentList} edit={StudentEdit} create={StudentCreate} icon={StudentIcon} />
    <Resource name="status" list={StatusList} icon={StatusIcon} />
  </Admin>
);

export default App;
