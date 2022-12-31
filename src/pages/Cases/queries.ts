// import makeQuery from '@/hooks/makeQuery';
// import { gql } from '@apollo/client';
import { graphql } from '@gqltypes/gql';

export const GET_USERS = graphql(`
  query Users($filter: getUserFilter) {
    users(filter: $filter) {
      name
      user_type
    }
  }
`);

// export const useMallListQuery = makeQuery<Users, UsersVariables>(GET_USERS);
