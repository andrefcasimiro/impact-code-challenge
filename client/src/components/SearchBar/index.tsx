import * as React from 'react'
// @ts-ignore
import { compose, withStateHandlers, withHandlers, HOC } from 'recompose'
import { connect } from 'react-redux'
import { applySearch } from '../../data/search/actions'
import { selectSearchParameters } from '../../data/search/selectors'
import {
  Content,
  Wrap,
} from './styled'
import TextInput from './TextInput'
import FilterInput from './FilterInput'
import Price from './Filters/Price'

const SearchBar = ({ filters, handleSearchByRange, handleSearchByText }) => {
  return (
    <Content>
      <Wrap>
        <TextInput onChange={handleSearchByText} value={filters.name} />
        <FilterInput filterKey='Price' component={<Price onChange={handleSearchByRange} />} />
      </Wrap>
    </Content>
  )
}

const mapStateToProps = state => ({
  searchParameters: selectSearchParameters(state),
})

const mapDispatchToProps = {
  applySearch,
}

const enhancer: any = compose(
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
      props.applySearch({
        name: undefined,
        region: undefined,
        country: undefined,
        producer: undefined,
        style: undefined,
        type: undefined,
        year: undefined,
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
      })
    }
  })
)


export default enhancer(SearchBar)
