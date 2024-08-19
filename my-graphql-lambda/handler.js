const { ApolloServer } = require("apollo-server-lambda");
const { PubSub } = require("graphql-subscriptions");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Create an instance of PubSub for handling subscriptions
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ pubsub }), // Pass pubsub to context
  subscriptions: {
    path: '/subscriptions',
  },
});

exports.queryHandler = server.createHandler({
  path: '/query',
});

exports.mutationHandler = server.createHandler({
  path: '/mutation',
});

exports.subscriptionHandler = server.createHandler({
  path: '/subscriptions',
});
