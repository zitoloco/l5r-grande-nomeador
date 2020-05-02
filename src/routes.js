import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EmptyPage from './EmptyPage';
import Page from './Page';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={EmptyPage} />
      <Route exact path="/:family" component={Page} />
    </Switch>
  </Router>
)

export default Routes;