// @flow
import { compose, prop } from "ramda"
import { SearchParameters } from './types'
import { SearchState } from './reducer'

export type Selector<T> = any

const base: Selector<SearchState> = prop("search")

export const selectSearchParameters: Selector<SearchParameters> = compose(
  prop("parameters"),
  base,
)
