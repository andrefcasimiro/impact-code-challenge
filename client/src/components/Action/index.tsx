import * as React from 'react'
import {
  Menu,
  Button,
} from './styled'


const Action = ({ onClick, children }) => (
  <Menu>
    <Button onClick={onClick}>{children}</Button>
  </Menu>
)

export default Action
