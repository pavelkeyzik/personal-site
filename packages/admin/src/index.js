import React from 'react';
import ReactDOM from 'react-dom';
import { BaseStyles } from '@primer/components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard';
import { AboutPage } from './pages/about';
import { Layout } from './components/layout';

ReactDOM.render(
  <React.StrictMode>
    <BaseStyles>
      <Router>
        <Layout>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <DashboardPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </BaseStyles>
  </React.StrictMode>,
  document.getElementById('root')
);
