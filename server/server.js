const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    tickers: [Ticker]
  }
  type Ticker {
    _id: ID
    title: String
    createdAt: String
    endDate: String
    username: String
    descr: String
  }

  type Query {
    user(id: ID!): User
  }
  type Query {
    ticker(id: ID!): Ticker
  }
  type Query {
    tickers(id: ID!): Ticker
  }
  type Query {
    users(id: ID!): User
  }
`;
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    ticker: async () => {
      return Ticker.findOne({ _id });
    },
    tickers: async () => {
      const params = title ? { Ticker } : {};
      return Ticker.find(params).sort({ createdAt: -1 });
    },
    user: async () => {
      return User.findOne({ _id });
    },
    users: async () => {
      return User.find();
    },
  },
};

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(
        `Use graphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
