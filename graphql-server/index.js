const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Create an instance of Express
const app = express();

// Define your type definitions (schema)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

// Function to start the server
async function startServer() {
  // Create an instance of Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the server
  await server.start();

  // Apply the Apollo GraphQL middleware to your Express server
  server.applyMiddleware({ app });

  // Define a simple route for the root path
  app.get('/', (req, res) => {
    res.send('Welcome to the GraphQL API');
  });

  // Define a health check route
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });

  // Start the Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// Call the function to start the server
startServer();
