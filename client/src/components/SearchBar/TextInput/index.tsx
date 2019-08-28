import * as React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import {
  Wrap,
  Text,
  Input,

} from './styled'

type Props = {
  onChange: any,
  value: string,
}

const TextInput = ({ handleInput, value }) => {
  return (
    <Wrap>
      <Text>Discover</Text>
      <Input type="text" onChange={handleInput} defaultValue={value} />
    </Wrap>
  )
}

const enhancer: any = compose(
  withHandlers({
    handleInput: (props: Props) => event => {
      const value = event.target.value.replace(/<[^>]*>?/gm, '')
      const transformedValue = value.charAt(0).toUpperCase() + value.slice(1)

      props.onChange(transformedValue)
    }
  })
)


export default enhancer(TextInput)
