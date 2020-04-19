import { ApolloClient, HttpLink, InMemoryCache, gql } from 'apollo-boost';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

export { client };
