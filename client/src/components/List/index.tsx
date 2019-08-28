import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import withQuery from '../../hocs/withQuery'
import { listBeers } from '../../data/beer/queries'
import { Beer } from '../../data/beer/types'
import { formatStyle, formatType } from '../../data/beer/helpers'
import { selectSearchParameters } from '../../data/search/selectors'
import {
  Content,
  TilesWrap,
  Tile,
  Section,
  Name,
  Producer,
  Price,
  Style,
  Img,
} from './styled'

const List = ({ data, handleProducerSearch }) => {
  if (!data) { return null }

  return (
    <Content>
      <TilesWrap>
        {data.map((beer: Beer, index: number) =>
          <Tile key={beer.id + index}>
            <Section>
              <Name>{beer.name}</Name>
              <Producer onClick={() => handleProducerSearch(beer.producer)}>
                by {beer.producer}
              </Producer>
            </Section>
            <Section>
              <Img src={beer.images[0]} alt='' />
            </Section>
            <Section>
              <Price>{beer.priceEUR} €</Price>
              <Style>{formatStyle(beer.style)} {formatType(beer.type)}</Style>
            </Section>
          </Tile>
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
  withHandlers({
    handleProducerSearch: props => value => {
      const url = value && value.replace(' ', '+')
      return window.open(`http://www.google.com/search?q=${url}`, '_blank')
    }
  }),
)


export default enhancer(List)
