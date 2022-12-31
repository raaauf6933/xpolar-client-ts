import { graphql } from '@gqltypes/gql';

export const GET_CLIENTS = graphql(`
  query Query {
    clients {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`);
