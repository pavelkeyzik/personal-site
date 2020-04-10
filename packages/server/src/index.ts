import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Work {
    title: String
    link: String
  }

  type Query {
    works: [Work]
  }
`;

const works = [
  {
    title: 'SUBARU TEAM BELARUS',
    link: 'https://www.subaruteambelarus.by/',
  },
  {
    title: 'Just For Fun',
    link: 'https://pavelkeyzik-just-for-fun.netlify.com/',
  }
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
