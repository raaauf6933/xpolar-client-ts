import { graphql } from 'types/gql';

export const CREATE_CLIENT = graphql(`
  mutation CreateClient($input: createClientInput!) {
    createClient(input: $input) {
      client {
        createdAt
        name
        id
        status
        updatedAt
      }
      errors {
        field
        message
      }
    }
  }
`);
