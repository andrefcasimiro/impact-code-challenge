import { graphql } from 'react-apollo'
// @ts-ignore
import { compose, HOC } from 'recompose'
import { always, identity, path, isNil } from 'ramda'

export type Query<Data, Params = {}> = {
  gql: any,
  selector?: string[],
  transform?: Function,
}

type Config<Outter, Variables> = {
  variables?: any,
}

type Added = {
  data: Object,
  loading: boolean,
  loadMore: Function,
  refetch: Function,
}

export const extractBySelector = (selector: string[]) =>
  path(['data'].concat(selector))

const applyTransform = (
  selector: string[] = [],
  transform: Function = identity,
) => (data: Object) => {
  const extractedData = extractBySelector(selector)(data)

  return isNil(extractedData) ? undefined : transform(extractedData)
}

function withQuery<Outter, Data, Variables>(
  query: Query<Data, Variables>,
  configuration: Config<Outter, Variables>,
  // @ts-ignore
): HOC<any, Outter> {
  const { gql, selector, transform } = query
  const variables = (configuration && configuration.variables) || always({})

  const queryHOC = graphql(gql, {
    props: props => ({
      data: applyTransform(selector, transform)(props),
      refetch: () => props.data && props.data.refetch(),
      loading: props.data && props.data.networkStatus < 7,
    }),
    options: props => ({
      variables: {
        // @ts-ignore
        ...variables(props),
      },
    })
  })

  return compose(
    queryHOC,
  )
}

export default withQuery
