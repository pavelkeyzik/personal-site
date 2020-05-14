import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Work {
    id: ID!
    title: String!
    description: String!
    link: String
  }

  type Query {
    works: [Work]
  }
`;

const works = [
  {
    id: '1',
    title: 'SUBARU TEAM BELARUS',
    description: 'Official site of Subaru club in Belarus',
    link: 'https://www.subaruteambelarus.by/',
  },
  {
    id: '2',
    title: 'Just For Fun',
    description: 'Site where I started to learn GraphQL',
    link: 'https://pavelkeyzik-just-for-fun.netlify.com/',
  },
];

const resolvers = {
  Query: {
    works: () => works,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
