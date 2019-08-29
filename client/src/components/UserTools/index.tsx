import * as React from 'react'
// @ts-ignore
import { compose, withStateHandlers, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { applySearch, clear } from '../../data/search/actions'
import { selectSearchParameters } from '../../data/search/selectors'
import {
  Content,
  Wrap,
  Section,
} from './styled'
import withOpen from '../../hocs/withOpen'
import TextInput from './TextInput'
import FilterInput from './FilterInput'
import Price from './Filters/Price'
import Alcohol from './Filters/Alcohol'
import Action from '../Action'
import AddProduct from '../../modals/AddProduct'

const UserTools = ({ isOpen, toggleOpen, filters, handleSearchByRange, handleSearchByText }) => {
  console.log('open? ', isOpen)
  return (
    <Content>
      {isOpen && <AddProduct close={toggleOpen} />}
      <Action onClick={toggleOpen}>Add product</Action>
      <Wrap>
        <TextInput onChange={handleSearchByText} value={filters.name} />
        <Section>
          <FilterInput filterKey='Price' component={<Price onChange={handleSearchByRange} />} />
          <FilterInput filterKey='Alcohol' component={<Alcohol onChange={handleSearchByRange} />} />
        </Section>
      </Wrap>
    </Content>
  )
}

const mapStateToProps = state => ({
  searchParameters: selectSearchParameters(state),
})

const mapDispatchToProps = {
  applySearch,
  clear,
}

const enhancer: any = compose(
  withOpen,
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    (props: any) => ({
      filters: props.searchParameters || {},
    }),
    {
      setFilters: props => ({ filters }) => ({ filters })
    }
  ),
  withHandlers({
    handleSearchByRange: (props: any) => (field: string, value: number) => {
      props.clear()

      props.applySearch({
        [field]: Number(value),
      })
    },
    handleSearchByText: (props: any) => (value: string) => {
      props.applySearch({
        name: value,
        region: value,
        country: value,
        producer: value,
        style: value,
        type: value,
        year: value,
        priceEUR: undefined,
        alcohol_percentage: undefined,
      })
    }
  })
)


export default enhancer(UserTools)
