const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const resolvers = {
  Query: {
    hello: () => "Hello, Serverless!",
  },

  Mutation: {
    setMessage: (_, { message }) => {
      pubsub.publish('MESSAGE_UPDATED', { messageUpdated: message });
      return message;
    },
  },

  Subscription: {
    messageUpdated: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_UPDATED']),
    },
  },
};

module.exports = resolvers;
