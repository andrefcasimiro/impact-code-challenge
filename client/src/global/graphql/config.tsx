import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const graphqlURI = window.location.hostname === 'localhost' ? 'http://localhost:4000/graphql' : 'https://my-beer-app-2019.herokuapp.com/graphql'
  console.log(graphqlURI)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: graphqlURI }),
})

export default client
