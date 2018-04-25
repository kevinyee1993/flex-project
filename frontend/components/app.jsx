import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './header';
import Survey from './main/survey/survey';

const App = () => (
  <div>
    <Header />
    <Survey />
  </div>

);

export default App;

//ds161483.mlab.com:61483/flexproject -u kevinmongo -p appacademy1

//USE THIS COMMAND TO CONNECT TO MONGO SHELL IN TERMINAL
//~/mongodb/mongodb-osx-x86_64-3.6.4/bin/mongo ds161483.mlab.com:61483/flexproject -u testuser -p password
