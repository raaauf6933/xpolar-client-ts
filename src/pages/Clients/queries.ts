import makeQuery from '@/hooks/makeQuery';
import { graphql } from 'types/gql';
import { ClientsQuery, ClientsQueryVariables } from 'types/graphql';

export const GET_CLIENTS = graphql(`
  query Clients($page: Int!, $limit: Int!) {
    clients(page: $page, limit: $limit) {
      edges {
        node {
          status
          updatedAt
          code
          name
          id
          createdAt
        }
      }
      count
      totalCount
      pageInfo {
        next {
          limit
          page
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
    }
  }
`);

export const useClientsQuery = makeQuery<ClientsQuery, ClientsQueryVariables>(
  GET_CLIENTS,
);
