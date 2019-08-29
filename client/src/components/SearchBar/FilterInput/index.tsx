import * as React from 'react'
// @ts-ignore
import { compose, Component } from 'recompose'
import withOpen from '../../../hocs/withOpen'
import {
  Button,
} from './styled'

type Props = {
  onChange: any,
  filterKey: string,
  component: Component,
}

const FilterInput = ({ isOpen, toggleOpen, filterKey, component }) => {
  return (
    <React.Fragment>
      {isOpen && React.cloneElement(component, { close: toggleOpen })}
      <Button onClick={toggleOpen} disabled={isOpen}>
        {filterKey}
      </Button>
    </React.Fragment>
  )
}

const enhancer: any = compose(
  withOpen,
)


export default enhancer(FilterInput)
