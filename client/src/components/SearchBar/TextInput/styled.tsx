import styled from 'styled-components'
import theme from '../../../global/theme'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-left: 1rem;
`

export const Text = styled.p`
  color: ${theme.color.white};
  font-size: 1.8rem;
`

export const Input = styled.input`
  display: flex;
  margin-left: 1rem;
  width: 20rem;
  height: 2.8rem;
  font-size: 1.6rem;
  border: none;
  transition: .3s all;
  padding: 0.2rem;

  &:focus {
    box-shadow: 0 0.2rem 1rem 0 rgba(0,0,0,0.8);
  }
`
