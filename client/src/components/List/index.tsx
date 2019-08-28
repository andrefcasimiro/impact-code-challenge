import * as React from 'react'
// @ts-ignore
import { compose, withHandlers, HOC } from 'recompose'
import withQuery from '../../hocs/withQuery'
import { listBeers } from '../../data/beer/queries'
import { Beer } from '../../data/beer/types'
import { formatStyle, formatType } from '../../data/beer/helpers'
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
  if (!data) {
    return null
  }

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

const enhancer: HOC<any, {}> = compose(
  withQuery(listBeers, {
    variables: () => ({
      filter: {},
    })
  }),
  withHandlers({
    handleProducerSearch: props => value => {
      const url = value && value.replace(' ', '+')
      return window.open(`http://www.google.com/search?q=${url}`, '_blank')
    }
  }),
)


export default enhancer(List)
