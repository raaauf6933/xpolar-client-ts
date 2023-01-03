import { graphql } from 'types/gql';

export const GET_CLIENTS_NAME = graphql(`
  query Clients_Name {
    clients {
      id
      name
    }
  }
`);
