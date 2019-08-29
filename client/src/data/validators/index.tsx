import * as yup from 'yup'

export const stringRequired = yup.string()
  .required('Field can not be empty.')
