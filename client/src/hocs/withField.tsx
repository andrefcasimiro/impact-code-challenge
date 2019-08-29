// @flow
import React from 'react'
import { Field } from 'formik'

const onBlur = props => () =>
  props.form.setFieldTouched(props.field.name, true)


const onChange = props => event => {
  const value = !!(event.stopPropagation && event.preventDefault)
    ? event.target.value
    : event

  props.form.setFieldValue(props.field.name, value)
  props.form.setStatus({ ...props.form.status, error: null })

  if (typeof props.onChange === "function") {
    props.onChange(event)
  }
}

const withField = (
  C: any
): any => {
  return props => (
    <Field
      {...props}
      render={fieldProps => {
        const error = fieldProps.form.errors[fieldProps.field.name]

        return (
          <C
            {...props}
            {...fieldProps.field}
            onChange={onChange({ ...props, ...fieldProps })}
            onBlur={onBlur({ ...props, ...fieldProps })}
            error={error}
          />
        )
      }}
    />
  )
}

export default withField
