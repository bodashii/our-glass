const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Ticker {
    _id: ID
    title: String
    createdAt: String
    endDate: String
    username: String
    descr: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    tickers: [Ticker]
  }
`;

module.exports = typeDefs;
