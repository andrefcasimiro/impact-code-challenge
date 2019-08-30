import * as R from 'ramda'
import {
  fetchHelper,
  postHelper,
  sanitize,
} from './helpers'

export const get = async (key: string, id: number): Promise<any> => await fetchHelper(key, id)

export const list = async (key: string, filters: any): Promise<any> => {
  const table = await fetchHelper(key)

  if (!filters || R.isEmpty(filters)) {
    return table
  }

  let result: any = []
  table.forEach((entry: any) => {
    Object.keys(filters).forEach((field: any) => {
      if (typeof filters[field][0] === 'number') {
        result = entry[field] >= filters[field][0] && !result.includes(entry)
          ? result.concat(entry)
          : result
      }

      if (filters[field].includes(entry[field]) && !result.includes(entry)) {
        result = result.concat(entry)
      }
    })
  })

  return result
}

export const add = async (key: string, input: any): Promise<any> => {
  const table = await fetchHelper(key)

  let _input = {
    id: table.length + 1,
  }

  Object.keys(input).forEach(key => {
    _input = {
      ..._input,
      [key]: sanitize([input[key]])[0],
    }
  })

  return await postHelper(key, _input)
}
