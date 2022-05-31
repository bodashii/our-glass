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


module.exports = resolvers;
