import * as React from 'react'
// @ts-ignore
import { compose, withHandlers, Component, withStateHandlers } from 'recompose'
import ContextMenu from '../../Filters'
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

const Alcohol = ({ handleChange, searchParameters, close }) => {
  return (
    <ContextMenu close={close}>
      <Wrapper>
        <Value>Alcohol {searchParameters.alcohol_percentage || 0} %</Value>
        <RangeInput type="range" max="20" min="0" onChange={handleChange} defaultValue={searchParameters.alcohol_percentage || 0}/>
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
      return props.onChange('alcohol_percentage', event.target.value)
    }
  }),
)


export default enhancer(Alcohol)
