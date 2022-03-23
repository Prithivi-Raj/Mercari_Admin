// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// in src/App.js

import Dashboard from './Dashboard';
import authProvider from './Authprovider';
// const App = () => (
//     <Admin  dataProvider={dataProvider}>
//         // ...
//     </Admin>
// );

import * as React from "react";
import { PostList,PostCreate,PostEdit } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
// import { Admin } from 'react-admin';
import { Admin, Resource, ListGuesser,EditGuesser  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './user';
// import dataProvider from './dataProvider';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} icon={UserIcon}/>
      <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate}/>

   </Admin>
  );

export default App;