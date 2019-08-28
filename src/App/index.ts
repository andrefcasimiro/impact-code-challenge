import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from '../api/graphql/index'
import config from './config'

class App {
  public express: any
  public expressGraphQL: any
  public corsOptions: Object

  constructor () {
    this.express = express()
    this.corsOptions = config.corsOptions
    this.initGraphQL()
  }

  private initGraphQL(): void {
    this.expressGraphQL = expressGraphQL(() => ({
      schema,
      graphiql: true,
    }))

    this.express.use(this.expressGraphQL)
  }
}

export default new App().express
