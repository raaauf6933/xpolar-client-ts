/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { DocumentNode } from 'graphql';
import {
  MutationResult,
  useMutation as useBaseMutation,
  ApolloError,
  MutationFunction,
} from '@apollo/client';
import { toast } from 'react-toastify';

export type UseMutation<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  //   <TData, TVariables, DefaultContext, ApolloCache<any>>,
  MutationResult<TData>,
];
export type UseMutationCbs<TData> = Partial<{
  onCompleted: (data: TData) => void;
  onError: (error: ApolloError) => void;
}>;
export type UseMutationHook<TData, TVariables> = (
  cbs: UseMutationCbs<TData>,
) => UseMutation<TData, TVariables>;

function makeMutation<TData, TVariables>(
  mutation: DocumentNode,
): UseMutationHook<TData, TVariables> {
  function useMutation<TData, TVariables>({
    onCompleted,
    onError,
  }: UseMutationCbs<TData>): UseMutation<TData, TVariables> {
    const [mutateFn, result] = useBaseMutation(mutation, {
      onCompleted,
      onError: (err: ApolloError) => {
        if (
          err.graphQLErrors[0]?.extensions?.exception?.code ===
            'ReadOnlyException' ||
          err.graphQLErrors[0]?.extensions?.code === 'INTERNAL_SERVER_ERROR'
        ) {
          toast(<span className="font-bold">Server Error</span>, {
            type: 'error',
          });
        }
        if (onError) {
          onError(err);
        }
      },
    });

    return [
      mutateFn,
      {
        ...result,
      },
    ];
  }

  return useMutation;
}

export default makeMutation;
