import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import withQuery from '../../../hocs/withQuery'
import { listBeers } from '../../../data/beer/queries'
import ProductTile from '../../ProductTile'
import {
  Text,
  Wrapper,
} from './styled'

const Recommended = ({ data, sourceItem }) => {
  if (!data) { return null }

  const transformedData = data.filter(item => item.id !== sourceItem.id)
  transformedData.length = 3

  return (
    <React.Fragment>
      <Text>You might also enjoy... </Text>
      <Wrapper>
        {transformedData.map((beer, index) => 
          <ProductTile beer={beer} key={beer.id + index} onClick={() => window.location.assign(`/beer/${beer.id}`)} />)
        }
      </Wrapper>
    </React.Fragment>
  )
}


const enhancer: any = compose(
  withQuery(listBeers, {
    variables: props => {
      return {
        filter: {
          style: props.sourceItem.style,
          type: props.sourceItem.type,
        },
      }
    }
  }),
)


export default enhancer(Recommended)
