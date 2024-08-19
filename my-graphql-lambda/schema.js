const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String!): String
  }

  type Subscription {
    messageUpdated: String
  }
`;

module.exports = typeDefs;
