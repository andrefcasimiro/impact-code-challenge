import { mergeResolvers } from 'merge-graphql-schemas'
import Beer from './Beer'

const resolvers = [
  Beer,
]

export default mergeResolvers(resolvers)
