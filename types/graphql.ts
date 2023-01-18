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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  region?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Case = {
  __typename?: 'Case';
  caseBatch?: Maybe<CaseBatch>;
  caseReference?: Maybe<Scalars['String']>;
  caseUniqueBatchId?: Maybe<Scalars['String']>;
  clientReference?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CaseBatch = {
  __typename?: 'CaseBatch';
  assignmentEndDate?: Maybe<Scalars['DateTime']>;
  assignmentStartDate?: Maybe<Scalars['DateTime']>;
  batchId?: Maybe<Scalars['String']>;
  batchReference?: Maybe<Scalars['String']>;
  cases?: Maybe<Array<Maybe<Case>>>;
  client?: Maybe<Client>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  status?: Maybe<CaseBatchStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CaseBatchStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS',
  Uploading = 'UPLOADING'
}

export type CaseBatchesCountableConnection = {
  __typename?: 'CaseBatchesCountableConnection';
  count: Scalars['Int'];
  edges: Array<CaseBatchesCountableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CaseBatchesCountableEdge = {
  __typename?: 'CaseBatchesCountableEdge';
  node: CaseBatch;
};

export type CaseBatchesSortingInput = {
  direction: OrderDirection;
};

export enum CaseDepartment {
  All = 'ALL',
  FirstCollection = 'FIRST_COLLECTION',
  Quarantine = 'QUARANTINE',
  SecondCollection = 'SECOND_COLLECTION'
}

export enum CaseStatus {
  All = 'ALL',
  CollectionFinished = 'COLLECTION_FINISHED',
  InCollection = 'IN_COLLECTION'
}

export type CasesCountableConnection = {
  __typename?: 'CasesCountableConnection';
  count: Scalars['Int'];
  edges: Array<CasesCountableEdge>;
  errors?: Maybe<Array<Maybe<Error>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CasesCountableEdge = {
  __typename?: 'CasesCountableEdge';
  node: Case;
};

export type CasesFilterInput = {
  batchNumber?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['String']>;
  clientReference?: InputMaybe<Scalars['String']>;
  debtorId?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type CasesSortingInput = {
  direction: OrderDirection;
};

export type Client = {
  __typename?: 'Client';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<CommonStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientCountableConnection = {
  __typename?: 'ClientCountableConnection';
  count: Scalars['Int'];
  edges: Array<ClientCountableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientCountableEdge = {
  __typename?: 'ClientCountableEdge';
  node: Client;
};

export enum CommonStatus {
  Act = 'ACT',
  Deact = 'DEACT'
}

export type Contacts = {
  __typename?: 'Contacts';
  contactValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  person?: Maybe<Person>;
  type?: Maybe<Scalars['String']>;
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

export type ImportCases = {
  __typename?: 'ImportCases';
  caseBatch?: Maybe<CaseBatch>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClient?: Maybe<CreateClient>;
  importCases?: Maybe<ImportCases>;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationImportCasesArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: ImportCasesInput;
};

export type Node = {
  id: Scalars['ID'];
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  next?: Maybe<Pagination>;
  previous?: Maybe<Pagination>;
  showing?: Maybe<PaginationItems>;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type PaginationItems = {
  __typename?: 'PaginationItems';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Array<Maybe<Address>>>;
  birthDay?: Maybe<Scalars['String']>;
  cases?: Maybe<Case>;
  contacs?: Maybe<Array<Maybe<Contacts>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  case?: Maybe<Case>;
  caseBatches?: Maybe<CaseBatchesCountableConnection>;
  cases?: Maybe<CasesCountableConnection>;
  clients?: Maybe<ClientCountableConnection>;
};


export type QueryCaseArgs = {
  id: Scalars['ID'];
};


export type QueryCaseBatchesArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  sortBy?: InputMaybe<CaseBatchesSortingInput>;
};


export type QueryCasesArgs = {
  filter?: InputMaybe<CasesFilterInput>;
  limit: Scalars['Int'];
  page: Scalars['Int'];
  sortBy?: InputMaybe<CasesSortingInput>;
};


export type QueryClientsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export enum UserType {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type CreateClientInput = {
  code: Scalars['Int'];
  name: Scalars['String'];
  status: CommonStatus;
};

export type ImportCasesInput = {
  assignmentEndDate: Scalars['Date'];
  assignmentStartDate: Scalars['Date'];
  client: Scalars['ID'];
};

export type ImportCasesMutationVariables = Exact<{
  input: ImportCasesInput;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type ImportCasesMutation = { __typename?: 'Mutation', importCases?: { __typename?: 'ImportCases', errors?: Array<{ __typename?: 'Error', message?: string | null, field?: string | null } | null> | null, caseBatch?: { __typename?: 'CaseBatch', id: string, isDeleted?: boolean | null, batchId?: string | null, batchReference?: string | null, status?: CaseBatchStatus | null, createdAt?: any | null, updatedAt?: any | null, client?: { __typename?: 'Client', updatedAt?: any | null, status?: CommonStatus | null, name?: string | null, id: string, createdAt?: any | null } | null } | null } | null };

export type CaseBatchesQueryVariables = Exact<{
  page: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<CaseBatchesSortingInput>;
}>;


export type CaseBatchesQuery = { __typename?: 'Query', caseBatches?: { __typename?: 'CaseBatchesCountableConnection', totalCount: number, count: number, pageInfo: { __typename?: 'PageInfo', next?: { __typename?: 'Pagination', page?: number | null, limit?: number | null } | null, previous?: { __typename?: 'Pagination', limit?: number | null, page?: number | null } | null, showing?: { __typename?: 'PaginationItems', from?: number | null, to?: number | null } | null }, edges: Array<{ __typename?: 'CaseBatchesCountableEdge', node: { __typename?: 'CaseBatch', id: string, batchId?: string | null, batchReference?: string | null, assignmentStartDate?: any | null, assignmentEndDate?: any | null, status?: CaseBatchStatus | null, isDeleted?: boolean | null, createdAt?: any | null, updatedAt?: any | null, client?: { __typename?: 'Client', id: string, name?: string | null, status?: CommonStatus | null, createdAt?: any | null, updatedAt?: any | null } | null } }> } | null };

export type CasesQueryVariables = Exact<{
  page: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<CasesSortingInput>;
  filter?: InputMaybe<CasesFilterInput>;
}>;


export type CasesQuery = { __typename?: 'Query', cases?: { __typename?: 'CasesCountableConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', previous?: { __typename?: 'Pagination', limit?: number | null, page?: number | null } | null, next?: { __typename?: 'Pagination', page?: number | null, limit?: number | null } | null, showing?: { __typename?: 'PaginationItems', from?: number | null, to?: number | null } | null }, edges: Array<{ __typename?: 'CasesCountableEdge', node: { __typename?: 'Case', id: string, caseUniqueBatchId?: string | null, caseReference?: string | null, clientReference?: string | null, caseBatch?: { __typename?: 'CaseBatch', status?: CaseBatchStatus | null, id: string, assignmentEndDate?: any | null, assignmentStartDate?: any | null, createdAt?: any | null, client?: { __typename?: 'Client', id: string, code?: number | null, name?: string | null } | null } | null, person?: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null } | null } }>, errors?: Array<{ __typename?: 'Error', field?: string | null, message?: string | null } | null> | null } | null };

export type CaseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CaseQuery = { __typename?: 'Query', case?: { __typename?: 'Case', id: string, clientReference?: string | null, createdAt?: any | null, caseUniqueBatchId?: string | null, caseReference?: string | null, caseBatch?: { __typename?: 'CaseBatch', id: string, status?: CaseBatchStatus | null, createdAt?: any | null, updatedAt?: any | null, batchReference?: string | null, batchId?: string | null, assignmentStartDate?: any | null, assignmentEndDate?: any | null, client?: { __typename?: 'Client', code?: number | null, name?: string | null, status?: CommonStatus | null, id: string, createdAt?: any | null, updatedAt?: any | null } | null } | null, person?: { __typename?: 'Person', gender?: string | null, firstName?: string | null, createdAt?: any | null, lastName?: string | null, birthDay?: string | null, updatedAt?: any | null, id: string, contacs?: Array<{ __typename?: 'Contacts', contactValue?: string | null, createdAt?: any | null, id: string } | null> | null, address?: Array<{ __typename?: 'Address', zipCode?: string | null, updatedAt?: any | null, id: string, address?: string | null, city?: string | null, region?: string | null, createdAt?: any | null } | null> | null } | null } | null };

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createClient?: { __typename?: 'CreateClient', client?: { __typename?: 'Client', createdAt?: any | null, name?: string | null, id: string, status?: CommonStatus | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'Error', field?: string | null, message?: string | null } | null> | null } | null };

export type ClientsQueryVariables = Exact<{
  page: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type ClientsQuery = { __typename?: 'Query', clients?: { __typename?: 'ClientCountableConnection', count: number, totalCount: number, edges: Array<{ __typename?: 'ClientCountableEdge', node: { __typename?: 'Client', status?: CommonStatus | null, updatedAt?: any | null, code?: number | null, name?: string | null, id: string, createdAt?: any | null } }>, pageInfo: { __typename?: 'PageInfo', next?: { __typename?: 'Pagination', limit?: number | null, page?: number | null } | null, previous?: { __typename?: 'Pagination', limit?: number | null, page?: number | null } | null, showing?: { __typename?: 'PaginationItems', from?: number | null, to?: number | null } | null } } | null };


export const ImportCasesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ImportCases"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"importCasesInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importCases"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"caseBatch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"batchReference"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<ImportCasesMutation, ImportCasesMutationVariables>;
export const CaseBatchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CaseBatches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CaseBatchesSortingInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caseBatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"batchReference"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseBatchesQuery, CaseBatchesQueryVariables>;
export const CasesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cases"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CasesSortingInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CasesFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cases"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"caseUniqueBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"caseReference"}},{"kind":"Field","name":{"kind":"Name","value":"clientReference"}},{"kind":"Field","name":{"kind":"Name","value":"caseBatch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CasesQuery, CasesQueryVariables>;
export const CaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Case"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"case"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientReference"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"caseUniqueBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"caseReference"}},{"kind":"Field","name":{"kind":"Name","value":"caseBatch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"batchReference"}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"contacs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactValue"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"birthDay"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseQuery, CaseQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"createClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;