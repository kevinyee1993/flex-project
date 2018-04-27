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
import ItineraryIndex from './main/itinerary_index';
// import ItineraryDetail from './main/itinerary_detail';
import NotFound from './404';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/survey' component={Survey} />
      <Route exact path='/recommendations' component={ItineraryIndex} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;

//ds161483.mlab.com:61483/flexproject -u kevinmongo -p appacademy1

//USE THIS COMMAND TO CONNECT TO MONGO SHELL IN TERMINAL
//~/mongodb/mongodb-osx-x86_64-3.6.4/bin/mongo ds161483.mlab.com:61483/flexproject -u testuser -p password
