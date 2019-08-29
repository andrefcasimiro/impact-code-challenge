import styled from 'styled-components'
import theme from '../../../../global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 12rem;
`

export const Value = styled.p`
  font-size: 2rem;
  ${theme.color.darkerGray};
`

export const RangeInput = styled.input`
  display: flex;
  flex-direction: row;

  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 80%; /* Full-width */
  height: 2rem; /* Specified height */
  background: ${theme.color.gray}; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 1rem; /* Set a specific slider handle width */
    height: 2.5rem; /* Slider handle height */
    background: ${theme.color.secondary}; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  ::-moz-range-thumb {
    appearance: none;
    width: 2rem; /* Set a specific slider handle width */
    height: 2.5rem; /* Slider handle height */
    background: ${theme.color.secondary}; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
`
