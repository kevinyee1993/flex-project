import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Survey from './main/survey/survey';
import SuggestIndex from './main/suggest_index/suggest_index';
import SuggestDetail from './main/suggest_detail/suggest_detail';
// import ItineraryDetail from './main/itinerary_detail';
import NotFound from './404';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/survey' component={Survey} />
      <Route exact path='/recommendations/:userData' component={SuggestIndex} />
      <Route exact path='/recommendations/:userData/:type/:name' component={SuggestDetail} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;

//ds161483.mlab.com:61483/flexproject -u kevinmongo -p appacademy1

//USE THIS COMMAND TO CONNECT TO MONGO SHELL IN TERMINAL
//~/mongodb/mongodb-osx-x86_64-3.6.4/bin/mongo ds161483.mlab.com:61483/flexproject -u testuser -p password
