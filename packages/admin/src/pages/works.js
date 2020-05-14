import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Heading,
  Flex,
  ButtonPrimary,
  TextInput,
} from '@primer/components';
import { PlusIcon, SearchIcon } from '@primer/octicons-v2-react';
import { ListOfWorks } from './works/list-of-works';

function WorksPage() {
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item as={Link} to="/works" selected>
          Works
        </Breadcrumb.Item>
      </Breadcrumb>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Heading>Works</Heading>
        <div>
          <TextInput mr={4} icon={SearchIcon} placeholder="Find work" />
          <ButtonPrimary>
            <PlusIcon /> Add new work
          </ButtonPrimary>
        </div>
      </Flex>
      <ListOfWorks />
    </React.Fragment>
  );
}

export { WorksPage };
