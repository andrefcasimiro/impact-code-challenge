import gql from 'graphql-tag'
import { Beer } from './types'
import { Query } from '../../hocs/withQuery'

export const getBeer: Query<Beer> = {
  gql: gql`
    query beer($id: number) {
      beer(id: $id) {
        name
        description
        type
        style
        producer
        region
        country
        year
        priceEUR
        alcohol_percentage
        images
        comments {
          author
          content
        }
      }
    }
  `,
  selector: ["beer"],
}

export const listBeers: Query<Beer[]> = {
  gql: gql`
    query beers($filter: BeersFilter) {
      beers(filter: $filter) {
        id
        name
        type
        style
        producer
        region
        country
        year
        priceEUR
        alcohol_percentage
        images
      }
    }
  `,
  selector: ["beers"],
}

