// @flow
import React from 'react'
import { compose } from 'recompose'
import * as yup from 'yup'
import withMutation from '../../hocs/withMutation'
import withForm from '../../hocs/withForm'
import Input from '../../components/Forms/Input'
import Select from '../../components/Forms/Select'
import Submit from '../../components/Forms/Submit'
import { addBeerMutation } from '../../data/beer/mutations'
import { stringRequired } from '../../data/validators'
import Modal from '../_Modal'

const typeOptions = [
  'Ale',
  'Lager',
  'Malt',
  'Stout',
]

const styleOptions = [
  'Amber',
  'Blonde',
  'Brown',
  'Cream',
  'Dark',
  'Pale',
  'Strong',
  'Wheat',
  'Red',
  'Indian Pale Ale',
  'Lime',
  'Pilsner',
  'Golden',
  'Fruit',
  'Honey',
]

const AddProduct = ({ close, isSubmitting }) => (
  <Modal close={close} title='Add a new product'>
    <Input
      name='name'
      placeholder='Enter a name'
      label='Name'
    />
    <Input
      name='description'
      placeholder='Enter a description'
      label='Description'
    />
    <Input
      name='producer'
      placeholder='Enter a producer'
      label='Producer'
    />
    <Select
      name='type'
      placeholder='Select one...'
      label='Type'
      options={typeOptions}
    />
    <Select
      name='style'
      placeholder='Select one...'
      label='Style'
      options={styleOptions}
    />
    <Input
      name='region'
      placeholder='Enter a region'
      label='Region'
    />
    <Input
      name='country'
      placeholder='Enter a country'
      label='Country'
    />
    <Input
      name='priceEUR'
      placeholder='Enter a price'
      label='Price (EUR)'
    />
    <Input
      name='alcohol_percentage'
      placeholder='Enter alcohol percentage'
      label='Alcohol (%)'
    />
    <Input
      name='images'
      placeholder='Enter a url...'
      label='Image'
    />
    <Submit loading={isSubmitting}>Add Product</Submit>
  </Modal>
)

const schema = {
  name: yup.string().required(stringRequired).min(3),
}

const enhancer: any = compose(
  withMutation(addBeerMutation),
  withForm({
    schema,
    onSubmit: props => values => {

      const transformedValues = {
        ...values,
        priceEUR: values.priceEUR && parseInt(values.priceEUR, 10),
        alcohol_percentage: values.alcohol_percentage && parseFloat(values.alcohol_percentage),
        images: values.images && [values.images],
      }

      return props.submitMutation({ input: transformedValues })
    },
    onSuccess: props => props.close(),
  }),
)

export default enhancer(AddProduct)
