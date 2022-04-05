// This module can be used to serve the GraphQL endpoint
// as a lambda function

import { Neo4jGraphQL } from '@neo4j/graphql'
import { ApolloServer } from 'apollo-server-lambda'
import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth'
import neo4j from 'neo4j-driver'

// This module is copied during the build step
// Be sure to run `npm run build`
// eslint-disable-next-line
const { typeDefs } = require('./schema/graphql-schema')
// const { resolvers } = require('../../resolvers/resolvers.js')

const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
)

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  // resolvers: { ...resolvers, ...serviceResolvers, ...arrivalsResolvers },
  driver,
  plugins: {
    auth: new Neo4jGraphQLAuthJWTPlugin({
      secret: process.env.JWT_SECRET,
      rolesPath: 'https://flcadmin\\.netlify\\.app/roles',
    }),
  },
})

const schema = await neoSchema.getSchema()

const server = new ApolloServer({
  context: ({ event }) => ({ req: event }),
  introspection: true,
  schema,
})

const apolloHandler = server.createHandler()

// eslint-disable-next-line import/prefer-default-export
export const handler = (event, context, ...args) => {
  return apolloHandler(
    {
      ...event,
      requestContext: context,
    },
    context,
    ...args
  )
}
