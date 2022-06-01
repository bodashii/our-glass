const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://devOps:qiqgtT4HZAAMyw5V@cluster0.hds84.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
