import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { WorksList } from 'components/works-list';

function HomePage(props: RouteComponentProps): JSX.Element {
  return (
    <React.Fragment>
      <h2>Home Page</h2>
      <WorksList />
    </React.Fragment>
  );
}

export { HomePage };
