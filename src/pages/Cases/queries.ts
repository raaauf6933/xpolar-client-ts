import makeQuery from '@/hooks/makeQuery';
import { graphql } from 'types/gql';
import {
  CaseQuery,
  CaseQueryVariables,
  CasesQuery,
  CasesQueryVariables,
} from 'types/graphql';

const GET_CASES = graphql(`
  query Cases(
    $page: Int!
    $limit: Int!
    $sortBy: CasesSortingInput
    $filter: CasesFilterInput
  ) {
    cases(page: $page, limit: $limit, sortBy: $sortBy, filter: $filter) {
      totalCount
      pageInfo {
        previous {
          limit
          page
        }
        next {
          page
          limit
        }
        showing {
          from
          to
        }
      }
      edges {
        node {
          id
          caseUniqueBatchId
          caseReference
          clientReference
          caseBatch {
            status
            id
            assignmentEndDate
            assignmentStartDate
            createdAt
            client {
              id
              code
              name
            }
          }
          person {
            id
            firstName
            lastName
          }
        }
      }
      errors {
        field
        message
      }
    }
  }
`);

export const useCasesListQuery = makeQuery<CasesQuery, CasesQueryVariables>(
  GET_CASES,
);

const GET_CASE = graphql(`
  query Case($id: ID!) {
    case(id: $id) {
      id
      clientReference
      createdAt
      caseUniqueBatchId
      caseReference
      caseBatch {
        id
        status
        createdAt
        updatedAt
        batchReference
        batchId
        assignmentStartDate
        assignmentEndDate
        client {
          code
          name
          status
          id
          createdAt
          updatedAt
        }
      }
      person {
        gender
        firstName
        createdAt
        contacs {
          contactValue
          createdAt
          id
        }
        lastName
        birthDay
        updatedAt
        id
        address {
          zipCode
          updatedAt
          id
          address
          city
          region
          createdAt
        }
      }
    }
  }
`);

export const useCaseQuery = makeQuery<CaseQuery, CaseQueryVariables>(GET_CASE);
