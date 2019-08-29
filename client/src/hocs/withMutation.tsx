import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { extractBySelector } from './withQuery'

type Mutation = {
  gql: any,
  selector?: string[],
  refetch?: any[],
}

const getRefetchQueries = (
  refetchQueries: Array<string>,
) => {
  if (!refetchQueries.length) {
    return []
  }

  return refetchQueries.map((refetchQuery: any) => ({
    query: refetchQuery.gql,
  }))
}

const withMutation = (mutation: Mutation ) => {
  const {
    gql,
    refetch = [],
    selector,
  } = mutation

  return compose(
    graphql(gql, {
      props: ({ mutate }): any => ({
        submitMutation: variables =>
          // @ts-ignore
          mutate({
            variables,
            refetchQueries: getRefetchQueries(refetch),
          })
            .then(extractBySelector(selector || []))
      }),
    }),
  )
}

export default withMutation
