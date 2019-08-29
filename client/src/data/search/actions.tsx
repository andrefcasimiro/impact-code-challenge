import { SearchParameters } from './types'

type ApplySearch = {
  type: 'SEARCH/APPLY',
  payload: SearchParameters,
}

export const applySearch = (parameters: SearchParameters): ApplySearch => ({
  type: 'SEARCH/APPLY',
  payload: parameters,
})

export const clear = () => ({
  type: 'SEARCH/CLEAR',
})
