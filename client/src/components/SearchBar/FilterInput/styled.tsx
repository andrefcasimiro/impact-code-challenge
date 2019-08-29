import styled from 'styled-components'
import theme from '../../../global/theme'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-left: 2rem;
`

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: ${theme.color.white};
  font-size: 1.8rem;
  min-height: 3rem;
  width: 8rem;
  border: none;
  cursor: pointer;
  transition: .2s all;
  margin-left: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 1rem 3rem 0 rgba(0,0,0,0.6);
  }
`
