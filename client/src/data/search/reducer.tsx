import { SearchParameters } from './types'

export type SearchState = {
  parameters: SearchParameters,
}

const initialState: SearchState = {
  parameters: {},
}

export const searchReducer = (
  state: SearchState = initialState,
  action: any,
): SearchState => {
  switch (action.type) {
    case 'SEARCH/APPLY':
      return {
        ...state,
        parameters: {
          ...state.parameters,
          ...action.payload,
        },
      }
    case 'SEARCH/CLEAR':
      return initialState
    default:
      return state
  }
}
