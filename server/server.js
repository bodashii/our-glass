const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/user'));

const dbo = require('./db/conn');

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
})

// const express = require("express");
// const { ApolloServer } = require('apollo-server-express');
// // const path = require("path");

// const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require("./utils/auth");
// const db = require("./db/conn");

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}`);
//       console.log(
//         `Use graphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// startApolloServer(typeDefs, resolvers);
