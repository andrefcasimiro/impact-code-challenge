
import React from "react"
import withField from '../../../hocs/withField'
import {
  InputWrap,
  Label,
  Error,
  StyledSelect,
} from './styled'

const Select = ({ name, options, label, value, onChange, error }) => {
  return (
    <InputWrap>
      <Label>{label}</Label>
      <StyledSelect onChange={onChange} value={value} name={name}>
        {options.map((option, index) =>
          <React.Fragment key={index}>
            {index === 0 && <option key={index + ' initial'} value="" selected disabled hidden>Choose one...</option>}
            <option key={index} value={option}>{option}</option>
          </React.Fragment>
        )}
      </StyledSelect>
      {error && typeof error === 'string' && <Error>{error}</Error>}
    </InputWrap>
  )
}

export default withField(Select)
