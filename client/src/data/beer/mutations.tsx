import gql from "graphql-tag"
import { listBeers } from './queries'

export const addBeerMutation = {
  gql: gql`
    mutation($input: AddBeerInput!) {
      addBeer(input: $input) {
        id
      }
    }
  `,
  refetch: [listBeers],
}
