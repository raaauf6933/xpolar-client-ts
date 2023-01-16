import makeMutation from '@/hooks/makeMutation';
import { graphql } from 'types/gql';
import {
  ImportCasesMutation,
  ImportCasesMutationVariables,
} from 'types/graphql';

const IMPORT_CASES_MUTATION = graphql(`
  mutation ImportCases($input: importCasesInput!, $file: Upload) {
    importCases(input: $input, file: $file) {
      errors {
        message
        field
      }
      caseBatch {
        id
        client {
          updatedAt
          status
          name
          id
          createdAt
        }
        isDeleted
        batchId
        batchReference
        status
        createdAt
        updatedAt
      }
    }
  }
`);

export const useImportCasesMutation = makeMutation<
  ImportCasesMutation,
  ImportCasesMutationVariables
>(IMPORT_CASES_MUTATION);
