import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { WorkType } from 'types';

interface WorksListItem {
  work: WorkType;
}

const WORKS_LIST = gql`
  query worksList {
    works {
      title
      link
    }
  }
`;

function WorksList(): JSX.Element {
  const { loading, error, data } = useQuery(WORKS_LIST);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return (
    <ol>
      {data.works.map((work: WorkType, index: number) => (
        <WorksListItem key={index} work={work} />
      ))}
    </ol>
  );
}

function WorksListItem({ work }: WorksListItem) {
  return (
    <li>
      <a href={work.link} target="_blank">
        {work.title}
      </a>
    </li>
  );
}

export { WorksList };
