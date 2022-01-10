import { ApolloServer } from 'apollo-server-express'

import typeDefs from './graphQL/typedefs'
import resolvers from './graphQL/resolvers'
import { PORT } from './utils/config'

import app from './app'

const server = new ApolloServer({ typeDefs, resolvers })

const intalizeServer = async () => {
  await server.start()
  server.applyMiddleware({ app })
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  )
}

intalizeServer()
