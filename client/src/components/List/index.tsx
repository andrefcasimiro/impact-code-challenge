import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import withQuery from '../../hocs/withQuery'
import { listBeers } from '../../data/beer/queries'
import { Beer } from '../../data/beer/types'
import { selectSearchParameters } from '../../data/search/selectors'
import ProductTile from '../ProductTile'
import {
  Content,
  TilesWrap,
} from './styled'

const List = ({ data }) => {
  if (!data) { return null }

  return (
    <Content>
      <TilesWrap>
        {data.map((beer: Beer, index: number) =>
          <ProductTile beer={beer} key={beer.id + index} onClick={() => window.location.assign(`/beer/${beer.id}`)} />
        )}
      </TilesWrap>
    </Content>
  )
}

const mapStateToProps = state => ({
  searchParameters: selectSearchParameters(state),
})

const enhancer: any = compose(
  connect(mapStateToProps, {}),
  withQuery(listBeers, {
    variables: props => {
      const isEmpty = Object.values(props.searchParameters).filter(value => value).length <= 0

      return {
        filter: isEmpty ? {} : props.searchParameters,
      }
    }
  }),
)


export default enhancer(List)
