import { graphql } from 'types/gql';

export const GET_CLIENTS = graphql(`
  query Clients {
    clients {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`);
