import styled, { css } from 'styled-components'
import theme from '../../../global/theme'

export const SubmitWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin: 1rem;
`

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: .25rem;
  background: ${theme.color.white};

  cursor: pointer;

  ${p => p.disabled && css`
      opacity: 0.5;
    `}
`
