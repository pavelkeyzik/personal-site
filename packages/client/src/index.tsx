import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';

import { routes } from 'routes';

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.Fragment>
    <Router>
      <HomePage path={routes.home} />
      <AboutPage path={routes.about} />
    </Router>
    <nav>
      <Link to={routes.home}>Home</Link> | <Link to={routes.about}>About</Link>
    </nav>
  </React.Fragment>
);
