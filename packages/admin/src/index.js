import React from 'react';
import ReactDOM from 'react-dom';
import { BaseStyles } from '@primer/components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { DashboardPage } from './pages/dashboard';
import { AboutPage } from './pages/about';
import { Layout } from './components/layout';
import { WorksPage } from './pages/works';

import { client } from './client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BaseStyles>
        <Router>
          <Layout>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/works">
                <WorksPage />
              </Route>
              <Route path="/">
                <DashboardPage />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </BaseStyles>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
