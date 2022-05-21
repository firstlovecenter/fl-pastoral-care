/* eslint-disable */
// This module can be used to serve the GraphQL endpoint
// as a lambda function

import { Neo4jGraphQL } from '@neo4j/graphql'
import { ApolloServer } from 'apollo-server-lambda'
import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth'
import neo4j from 'neo4j-driver'
import { resolvers } from '../../resolvers/resolvers'
import { Handler, HandlerEvent } from '@netlify/functions'
// This module is copied during the build step
// Be sure to run `npm run build`
const { typeDefs } = require('./schema/graphql-schema')

const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
)

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  resolvers: { ...resolvers },
  driver,
  plugins: {
    auth: new Neo4jGraphQLAuthJWTPlugin({
      secret: process.env.JWT_SECRET?.replace(/\\n/gm, '\n') || '',
      rolesPath: 'https://flcadmin\\.netlify\\.app/roles',
    }),
  },
})

export const handler: Handler = async (
  event: HandlerEvent,
  context: any,
  ...args
) => {
  const schema = await neoSchema.getSchema()

  const server = new ApolloServer({
    context: ({ event }) => ({ req: event }),
    introspection: true,
    schema,
  })

  const apolloHandler = server.createHandler()

  return apolloHandler(
    {
      ...event,
      requestContext: context,
    },
    context,
    //@ts-ignore
    ...args
  )
}
