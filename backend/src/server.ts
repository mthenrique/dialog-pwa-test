import 'reflect-metadata'

import express, {  Request, Response } from 'express'

import { ApolloServer } from 'apollo-server-express';
import { UsersResolver } from './resolvers/users-resolver';

import cors from 'cors';

import path from 'node:path'
import { buildSchema } from 'type-graphql';

const main = async () => {

  const schema = await buildSchema({
    resolvers: [
      UsersResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const apolloServer = new ApolloServer({
    schema
  })

  await apolloServer.start()
  const app = express()

  app.use(cors())
  
  app.use((req: Request, res: Response, next: Function) => {
    console.log('🚀 ~ REQUEST: ', req.header);
    next()
  })
  
  apolloServer.applyMiddleware({
    app, 
    path: '/graphql'
  })

  app.listen(4000, () => {
    console.log('🚀 ~ HTTP server running on port: 4000');
  })
}

main().catch((error) => {
  console.error(error)
})
