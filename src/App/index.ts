import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from '../api/graphql/index'
import config from './config'
import cors from 'cors'


class App {
  public express: any
  public expressGraphQL: any
  public corsOptions: Object

  constructor () {
    this.express = express()
    this.corsOptions = config.corsOptions
    // Order is important since graphql will need corsOptions
    this.initCorsOptions()
    this.initGraphQL()
  }

  private initCorsOptions(): void {
    this.express.use(cors(this.corsOptions))
  }

  private initGraphQL(): void {
    this.expressGraphQL = expressGraphQL(() => ({
      schema,
      cors,
      graphiql: true,
    }))

    this.express.use(this.expressGraphQL)
  }
}

export default new App().express
