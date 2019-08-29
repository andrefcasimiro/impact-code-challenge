import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import {
  Tile,
  Section,
  Name,
  Producer,
  Price,
  Style,
  Img,
} from './styled'

const ProductTile = ({ beer, onClick }) => {
  if (!beer) { return null }

  return (
    <Tile onClick={onClick}>
      <Section>
        <Name>{beer.name}</Name>
        <Producer>
          by {beer.producer}
        </Producer>
      </Section>
      <Section>
        <Img src={beer.images[0]} alt='' />
      </Section>
      <Section>
        <Price>{beer.priceEUR} €</Price>
        <Style>{beer.style} {beer.type}</Style>
      </Section>
    </Tile>
  )
}

export default ProductTile
