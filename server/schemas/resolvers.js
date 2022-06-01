const { Ticker, User } = require("../models");

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
    user: async (parent, args) => {
      return User.findOne({ _id });
    },
    users: async () => {
      return User.find();
    },
  },
  Mutation: {
    addUser:  async (parent, args) => {
      const user =  await User.create(args);
      
      return { user };
    },
  },
};


module.exports = resolvers;
