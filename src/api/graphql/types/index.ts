import { mergeTypes } from 'merge-graphql-schemas'
import Comment from './Comment'
import Beer from './Beer'

const typeDefs = [
  Comment,
  Beer,
]

export default mergeTypes(typeDefs, { all: true })
