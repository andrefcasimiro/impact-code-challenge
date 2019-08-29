import * as React from 'react'
// @ts-ignore
import { compose, withHandlers, Component, withStateHandlers } from 'recompose'
import ContextMenu from '..'
import { connect } from 'react-redux'
import { selectSearchParameters } from '../../../../data/search/selectors'
import {
  Wrapper,
  Value,
  RangeInput,
} from './styled'

type Props = {
  onChange: Function,
  close: Function,
}

const Price = ({ handleChange, searchParameters, close }) => {
  return (
    <ContextMenu close={close}>
      <Wrapper>
        <Value>From {searchParameters.priceEUR || 0} €</Value>
        <RangeInput type="range" max="20" min="0" onChange={handleChange} defaultValue={searchParameters.priceEUR || 0}/>
      </Wrapper>
    </ContextMenu>
  )
}

const mapStateToProps = state => ({
  searchParameters: selectSearchParameters(state),
})

const mapDispatchToProps = {
}

const enhancer: any = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChange: (props: any) => event => {
      return props.onChange('priceEUR', event.target.value)
    }
  }),
)


export default enhancer(Price)
