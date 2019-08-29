import styled from 'styled-components'
import theme from '../../global/theme'
import { mq } from '../../common/mediaQuery'

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
`

export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  background: ${theme.color.white};
  color: ${theme.color.darkerGray};
  font-size: 1.8rem;
  min-height: 3rem;
  width: 14rem;
  border: 0.1rem solid ${theme.color.gray};
  padding: 0.5rem;
  cursor: pointer;
  transition: .2s all;
  justify-content: center;
  margin-bottom: 1rem;

  ${mq("max").tablet} {
    width: 100%;
  }
`
