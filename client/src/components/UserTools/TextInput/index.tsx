import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { selectSearchParameters } from '../../../data/search/selectors'
import {
  Wrap,
  Text,
  Input,

} from './styled'

type Props = {
  onChange: any,
}

const TextInput = ({ handleInput, searchParameters }) => {
  return (
    <Wrap>
      <Text>Discover</Text>
      <Input type="text" onChange={handleInput} value={searchParameters.name || ''} />
    </Wrap>
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
    handleInput: (props: Props) => event => {
      const value = event.target.value.replace(/<[^>]*>?/gm, '')
      const transformedValue = value.charAt(0).toUpperCase() + value.slice(1)

      props.onChange(transformedValue)
    }
  }),
)


export default enhancer(TextInput)
