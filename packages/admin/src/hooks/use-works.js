import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_WORKS = gql`
  query WorksList {
    works {
      id
      title
      link
      description
    }
  }
`;

function useWorks() {
  const { data, loading, error } = useQuery(GET_WORKS);

  return { works: data?.works, loading, error };
}

export { useWorks };
