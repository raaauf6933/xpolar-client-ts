import { ApolloQueryResult } from '@apollo/client';
import { DocumentNode } from 'graphql';
// import { useEffect } from 'react';
import { QueryResult, useQuery as useBaseQuery } from '@apollo/client';

export interface LoadMore<TData, TVariables> {
  loadMore: (
    mergeFunc: (prev: TData, next: TData) => TData,
    extraVariables: Partial<TVariables>,
  ) => Promise<ApolloQueryResult<TData>>;
}

export type UseQueryResult<TData, TVariables> = QueryResult<TData, TVariables> &
  LoadMore<TData, TVariables>;

type UseQueryOpts<TVariables> = Partial<{
  displayLoader: boolean;
  skip: boolean;
  variables: TVariables;
}>;
type UseQueryHook<TData, TVariables> = (
  opts: UseQueryOpts<TVariables>,
) => UseQueryResult<TData, TVariables>;

function makeQuery<TData, TVariables>(
  query: DocumentNode,
): UseQueryHook<TData, TVariables> {
  function useQuery({
    // displayLoader,
    skip,
    variables,
  }: UseQueryOpts<TVariables>): UseQueryResult<TData, TVariables> {
    // const notify = useNotifier();
    // const intl = useIntl();
    // const [, dispatchAppState] = useAppState();
    // const user = useUser();

    const queryData = useBaseQuery(query, {
      context: {
        useBatching: true,
      },
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
      onError: (error) => {
        throw error;
      },
      skip,
      variables,
    });

    // useEffect(() => {
    //   if (displayLoader) {
    //     dispatchAppState({
    //       payload: {
    //         value: queryData.loading,
    //       },
    //       type: 'displayLoader',
    //     });
    //   }
    // }, [queryData.loading]);

    const loadMore = (
      mergeFunc: (previousResults: TData, fetchMoreResult: TData) => TData,
      extraVariables: Partial<TVariables>,
    ) =>
      queryData.fetchMore({
        query,
        updateQuery: (previousResults, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResults;
          }
          return mergeFunc(previousResults, fetchMoreResult);
        },
        variables: { ...variables, ...extraVariables },
      });

    return {
      ...queryData,
      loadMore,
    };
  }

  return useQuery;
}

export default makeQuery;
