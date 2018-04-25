import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './header';
import Survey from './main/survey';

const App = () => (
  <div>
    <Header />
    <Survey /> 
  </div>

);

export default App;
