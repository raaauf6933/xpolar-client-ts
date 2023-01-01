/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Client = {
  __typename?: 'Client';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateClient = {
  __typename?: 'CreateClient';
  client?: Maybe<Client>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Error = {
  __typename?: 'Error';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClient?: Maybe<CreateClient>;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};

export type Query = {
  __typename?: 'Query';
  clients?: Maybe<Array<Maybe<Client>>>;
};

export enum UserType {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type CreateClientInput = {
  name: Scalars['String'];
};

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', clients?: Array<{ __typename?: 'Client', id?: string | null, name?: string | null, status?: string | null, createdAt?: any | null, updatedAt?: any | null } | null> | null };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;