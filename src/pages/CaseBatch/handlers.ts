import { toast } from 'react-toastify';
import { ImportCasesMutation } from 'types/graphql';

export const onCompleteImportCases = (
  data: ImportCasesMutation,
  refetchCaseBatchesData: () => void,
) => {
  if (!data?.importCases?.errors) {
    toast('Case Batch is now being processed', {
      type: 'success',
    });
    refetchCaseBatchesData();
  }
};
