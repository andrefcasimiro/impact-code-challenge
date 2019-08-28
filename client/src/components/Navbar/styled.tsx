import styled from 'styled-components'
import theme from '../../global/theme'
import { mq } from '../../common/mediaQuery'

export const Wrap = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const Link = styled.a`
  font-size: 1.7rem;
  color: ${theme.color.white};
  margin-right: 2rem;

  &:hover {
    text-decoration: underline;
  }

  ${mq('max').tablet} {
    font-size: 1.4rem;
  }
`
