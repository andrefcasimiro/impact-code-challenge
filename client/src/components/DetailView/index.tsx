import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import withQuery from '../../hocs/withQuery'
import { getBeer } from '../../data/beer/queries'
import { Beer } from '../../data/beer/types'
import { selectSearchParameters } from '../../data/search/selectors'
import ExternalLink from '../../assets/svg/ExternalLink'
import Recommended from './Recommended'
import Comment from './Comment'
import Action from '../Action'
import {
  Menu,
  Button,
  Content,
  DetailsWrap,
  Box,
  Name,
  Producer,
  Text,
  Description,
  Region,
  Row,
  Img,
} from './styled'

const DetailView = ({ data, handleProducerClick }) => {
  if (!data) { return null }

  return (
    <Content>
      <Action onClick={() => window.location.assign('/')}>Go back</Action>
      <DetailsWrap>
        <Box width={'35'}>
          {data.images && data.images.length &&
            <Img src={data.images[0].split('?')[0] + '?auto=compress&w=360'} />
          }
        </Box>
        <Box width={'65'}>
          <Name>{data.name}</Name>
          <Producer>by {data.producer} <ExternalLink onClick={() => handleProducerClick(data.producer)} /></Producer>
          <Row>
            <Text>{data.style} {data.type}, {data.year}</Text>
            <Text>Price: {data.priceEUR} €, Alcohol: {data.alcohol_percentage} %</Text>
          </Row>
          <Description>{data.description}</Description>
          <Region>brewed in {data.region}, {data.country}</Region>
          <Recommended sourceItem={data} />
        </Box>
        <Box width={'100'}>
          {data.comments && data.comments.length
            ? data.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            : <Text>No comments yet.</Text>
          }
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
  withHandlers({
    handleProducerClick: props => value => {
      const url = value && value.replace(' ', '+')
      return window.open(`http://www.google.com/search?q=${url}`, '_blank')
    },
  }),
)


export default enhancer(DetailView)
