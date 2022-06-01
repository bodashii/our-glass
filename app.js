const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(process.env.PORT, () => {
  console.log('App listening on port 3000')
})

