import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import withQuery from '../../hocs/withQuery'
import { getBeer } from '../../data/beer/queries'
import { Beer } from '../../data/beer/types'
import { selectSearchParameters } from '../../data/search/selectors'
import {
  Content,
  DetailsWrap,
  Box,
  Tile,
  Section,
  Name,
  Producer,
  Price,
  Style,
  Img,
} from './styled'

const DetailView = ({ data  }) => {
  if (!data) { return null }

  return (
    <Content>
      <DetailsWrap>
        <Box width={'25'}>
          <Name>{data.name}</Name>
          <Img src={data.images[0].split('?')[0] + '?auto=compress&w=360'} />
        </Box>
        <Box width={'75'}>
          <Style>{data.style} {data.type}</Style>
          <Producer>by {data.producer}</Producer>
          <Img src={data.images[0].split('?')[0] + '?auto=compress&w=360'} />
        </Box>
      </DetailsWrap>
    </Content>
  )
}

const mapStateToProps = state => ({
  searchParameters: selectSearchParameters(state),
})

const enhancer: any = compose(
  connect(mapStateToProps, {}),
  withQuery(getBeer, {
    variables: props => {
      const urlParams = window.location.href.split('/')
      const id = parseInt(urlParams[urlParams.length - 1], 10)

      return {
        id,
      }
    }
  }),
)


export default enhancer(DetailView)
