import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as auth from './utils/auth';
import HomePage from './containers/HomePage';
import Logout from './containers/Logout';
import Detail from './containers/Detail';
import Main from './containers/Main';
import NotFound from './containers/NotFound';

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace('/login');
  }
};

export default(
  <Route path="/app/" component={Main}>
    <IndexRoute component={HomePage}/>
    <Route path="account" component={Detail}/>
    <Route path="logout" component={Logout}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
