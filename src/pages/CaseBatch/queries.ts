import makeQuery from '@/hooks/makeQuery';
import { graphql } from 'types/gql';
import { CaseBatchesQuery, CaseBatchesQueryVariables } from 'types/graphql';

export const GET_CASE_BATCHES = graphql(`
  query CaseBatches(
    $page: Int!
    $limit: Int!
    $sortBy: CaseBatchesSortingInput
  ) {
    caseBatches(page: $page, limit: $limit, sortBy: $sortBy) {
      totalCount
      pageInfo {
        next {
          page
          limit
        }
        previous {
          limit
          page
        }
        showing {
          from
          to
        }
      }
      count
      edges {
        node {
          id
          client {
            id
            name
            status
            createdAt
            updatedAt
          }
          batchId
          batchReference
          assignmentStartDate
          assignmentEndDate
          status
          isDeleted
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const useCaseBatchesListQuery = makeQuery<
  CaseBatchesQuery,
  CaseBatchesQueryVariables
>(GET_CASE_BATCHES);
