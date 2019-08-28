import * as R from 'ramda'
import config from '../../../App/config'

const fetch = require('node-fetch')
const baseURI = config.corsOptions.origin

export const fetchHelper = (key: string, id?: number): any => {
  const endpoint = id ? `${baseURI}/${key}/${id}` : `${baseURI}/${key}`

  return fetch(endpoint).then((result: any) => result.json())
}

export const postHelper = (key: string, input: any): any => {
  const endpoint = `${baseURI}/${key}`

  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(input),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((result: any) => result.json())
}

export const sanitize = (list: any) => list.map((item: any) => {
  if (typeof item === 'string' && !R.isEmpty(item)) {
    return item.replace(/<[^>]*>?/gm, '').trim()
  }

  if (Array.isArray(item)) {
    return sanitize(item)
  }

  if (typeof item === 'object') {
    let _object = {}

    Object.keys(item).forEach((itemKey: any) => {
      _object = {
        ..._object,
        [itemKey]: (sanitize([item[itemKey]]))[0]
      }
    })

    return _object
  }

  return item
})
