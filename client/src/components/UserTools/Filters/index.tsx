import React, { ReactNode } from 'react'
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose'
import {
  Wrap,
  Content,
} from './styled'

const ContextMenu = ({ children, contextMenuRef }: any) => (
  <Wrap ref={contextMenuRef}>
    <Content>
      {children}
    </Content>
  </Wrap>
)

const enhancer: any = compose(
  withStateHandlers(
    {
      contextMenuRef: React.createRef(),
    },
    {},
  ),
  withHandlers({
    handleClickOutside: (props: any) => event => {
      const current = props.contextMenuRef.current

      if (current && !current.contains(event.target)) {
        props.close()
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      // @ts-ignore
      document.addEventListener('mousedown', this.props.handleClickOutside)
    },
    componentWillUnmount() {
      // @ts-ignore
      document.removeEventListener('mousedown', this.props.handleClickOutside)
    },
  })
)

export default enhancer(ContextMenu)
