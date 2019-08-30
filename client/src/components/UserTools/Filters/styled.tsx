import styled from 'styled-components'
import theme from '../../../global/theme'
import { mq } from '../../../common/mediaQuery'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 3.5rem;
  z-index: ${theme.zIndices.contextMenu};
`

export const Content = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  top: 0;
  min-width: 20rem;
  min-height: 5rem;
  max-height: 30rem;
  overflow-y: scroll;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  ${mq("max").tablet} {
    transform: translate(-25%);
  }
`