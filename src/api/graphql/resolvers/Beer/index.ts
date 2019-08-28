import { get, list, add } from '../../../actions/common'
import product_types from '../../../constants'

export default {
  Query: {
    beer: (root: any, args: any) => new Promise((resolve, reject) => {
      const { id } = args

      if (!id) {
        reject('No id provided.')
      }

      const result = get(product_types.BEER, id)

      if (!result) {
        reject(result)
      }

      resolve(result)
    }),
    beers: (root: any, args: any) => new Promise((resolve, reject) => {
      const { filter } = args

      const result = list(product_types.BEER, filter)

      if (!result) {
        reject(result)
      }

      resolve(result)
    }),
  },
  Mutation: {
    addBeer: (root: any, args: any) => new Promise((resolve, reject) => {
      const { input } = args

      const result = add(product_types.BEER, input)

      if (!result) {
        reject(result)
      }

      resolve(result)
    })
  }
}
