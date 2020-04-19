import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';

import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';

import { routes } from 'routes';
import { client } from 'utils/api-client';

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <ApolloProvider client={client}>
    <Router>
      <HomePage path={routes.home} />
      <AboutPage path={routes.about} />
    </Router>
    <nav>
      <Link to={routes.home}>Home</Link> | <Link to={routes.about}>About</Link>
    </nav>
  </ApolloProvider>
);
