// @flow
import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import { pick } from 'ramda'
import * as yup from 'yup'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

type Configuration = {
  schema: any,
  onSubmit: any,
  onSuccess?: Function | any,
  onError?: Function | any,
}

const withForm = (
  configuration: Configuration,
): any => {
  const {
    schema,
    onSubmit,
    onSuccess,
    onError,
  } = configuration

  return C =>
    withFormik({
      mapPropsToValues: (props: any) => props.formData
        ? pick(Object.keys(schema))(props.formData)
        : {},
      validationSchema: yup.object().shape(schema),
      handleSubmit: (values, form: any) => {
        form.setStatus({ ...form.status, error: null })

        return onSubmit(form.props)(values)
          .then(result => {
            form.setStatus({ ...form.status, hasSubmitted: true })
            form.setSubmitting(false)

            if (onSuccess) {
              onSuccess({ ...form, ...form.props, values })(result)
            }
          })
          .catch(error => {
            form.setStatus({ ...form.status, error })
            form.setSubmitting(false)

            if (onError) {
              onError({ ...form, ...form.props })(error)
            }
          })
      }
    })(props => (
      <Form onSubmit={event => {
          props.setStatus({ ...props.status, submitted: true })

          return props.handleSubmit(event)
        }}
      >
        <C {...props} />
      </Form>
    ))
}

export default withForm
