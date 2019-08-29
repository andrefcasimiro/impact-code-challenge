import styled from 'styled-components'
import theme from '../../../global/theme'

export const Text = styled.p`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-self: flex-start;
  padding-top: 2rem;
  font-size: 1.6rem;
  color: ${theme.color.darkerGray};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
