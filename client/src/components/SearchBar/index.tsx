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

const SearchBar = ({ filters, handleSearchByText }) => {

  return (
    <Content>
      <Wrap>
        <TextInput onChange={handleSearchByText} value={filters.name} />
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
    handleSearchByText: (props: any) => (value: string) => {

      props.applySearch({
        name: value,
        region: value,
        country: value,
        producer: value,
      })
    }
  })
)


export default enhancer(SearchBar)
