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
  status: CommonStatus;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CommonStatus {
  Act = 'ACT',
  Deact = 'DEACT'
}

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
  status: CommonStatus;
};

export type Clients_NameQueryVariables = Exact<{ [key: string]: never; }>;


export type Clients_NameQuery = { __typename?: 'Query', clients?: Array<{ __typename?: 'Client', id?: string | null, name?: string | null } | null> | null };

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createClient?: { __typename?: 'CreateClient', client?: { __typename?: 'Client', createdAt?: any | null, name?: string | null, id?: string | null, status: CommonStatus, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'Error', field?: string | null, message?: string | null } | null> | null } | null };

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = { __typename?: 'Query', clients?: Array<{ __typename?: 'Client', id?: string | null, name?: string | null, status: CommonStatus, createdAt?: any | null, updatedAt?: any | null } | null> | null };


export const Clients_NameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients_Name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<Clients_NameQuery, Clients_NameQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"createClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;