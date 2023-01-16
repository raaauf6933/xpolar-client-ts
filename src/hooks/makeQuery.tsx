import * as React from 'react';
import {
  ApolloQueryResult,
  QueryResult,
  useQuery as useBaseQuery,
} from '@apollo/client';
import { DocumentNode } from 'graphql';
import { toast } from 'react-toastify';

export interface LoadMore<TData, TVariables> {
  loadMore: (
    mergeFunc: (prev: TData, next: TData) => TData,
    extraVariables: Partial<TVariables>,
  ) => Promise<ApolloQueryResult<TData>>;
}

export type UseQueryResult<TData, TVariables> = QueryResult<TData, TVariables> &
  LoadMore<TData, TVariables>;

type UseQueryOpts<TVariables> = Partial<{
  // displayLoader: boolean;
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
    const queryData = useBaseQuery(query, {
      context: {
        useBatching: true,
      },
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
      onError: (error) => {
        if (error.name === 'ApolloError') {
          toast(<span className="font-bold">Server Error</span>, {
            type: 'error',
          });
        }
      },
      skip,
      variables,
    });

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
