import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Page from './pages/Page'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Page} />
      <Route exact path="/:family" component={Page} />
    </Switch>
  </Router>
)

export default Routes
