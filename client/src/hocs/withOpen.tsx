// @flow
import * as React from 'react'
import { withStateHandlers } from 'recompose'

const withOpen = (WrappedComponent: any): any => {
  const enhance = withStateHandlers(
    {
      isOpen: false,
    },
    {
      toggleOpen: ({ isOpen }) => () => ({ isOpen: !isOpen }),
    },
  )

  return enhance(
    ({ isOpen, toggleOpen, ...rest }) => (
      <WrappedComponent isOpen={isOpen} toggleOpen={toggleOpen} {...rest} />
    )
  )
}

export default withOpen
