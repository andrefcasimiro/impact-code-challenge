// @flow
import React from 'react'
import {
  SubmitWrap,
  SubmitButton,
} from './styled'

const Submit = ({ onClick, children, disabled, loading }: any) => (
  <SubmitWrap>
    <SubmitButton type='submit' onClick={onClick} disabled={disabled || loading}>
      {children}
    </SubmitButton>
  </SubmitWrap>
)

export default Submit
