import * as React from 'react'
import withQuery from '../../hocs/withQuery'
import { listBeers } from '../../data/beer/queries'

const List = ({ data }) => {
  if (!data) {
    return <p>Failed to load data.</p>
  }

  console.log('data: ', data)

  return (
   null
  )
}
export default withQuery(listBeers, {
  variables: () => ({
    filter: {},
  })
})(List)
