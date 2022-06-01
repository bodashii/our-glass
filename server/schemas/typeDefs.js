const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;

// const ADD_USER = gql`
//   mutation AddUser($type: String!) {
//     addTodo(type: $type) {
//       id
//       user
//     }
//   }
// `;


const typeDefs = gql`
  type User {
    id: ID!
    username: String
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
    user(id: ID): User
  }
  type Query {
    ticker(id: ID!): Ticker
  }
  type Query {
    tickers(id: ID!): Ticker
  }
  type Query {
    users(id: ID): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`; 

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
