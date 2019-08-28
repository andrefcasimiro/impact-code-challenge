import { BeerType, BeerStyle } from '../beer/types'

export type SearchParameters = {
  name?: string[],
  type?: BeerType[],
  style?: BeerStyle[],
  region?: string[],
  country?: string[],
  year?: number[],
}
