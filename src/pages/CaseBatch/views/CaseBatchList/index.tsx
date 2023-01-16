import * as React from 'react';
import CaseBatchListPage from '../../components/CaseBatchListPage';
import useFilter from '@/hooks/useFilter';
import { CaseBatchListUrlDialog, ImportCasesQueryParams } from '../../types';
import { createFilterTab } from '../../utils';
import CaseImportBatchDialog from '../../components/CaseImportBatchDialog';
import useActionDialog from '@/hooks/useActionDialog';
import { useClientsQuery } from '@/pages/Clients/queries';
import { useImportCasesMutation } from '../../mutation';
import { onCompleteImportCases } from '../../handlers';
import { useCaseBatchesListQuery } from '../../queries';
import usePaginator from '@/hooks/usePaginator';
import { OrderDirection } from 'types/graphql';

const CaseBatchList: React.FC = () => {
  const [setParams, paramsState] = useFilter<ImportCasesQueryParams>();
  const [openAction, closeAction, isOpen] =
    useActionDialog<CaseBatchListUrlDialog>();
  const [paginate, paginateState] = usePaginator();

  const { data: caseBatchesData, refetch: refetchCaseBatchesData } =
    useCaseBatchesListQuery({
      variables: {
        limit: paginateState.limit,
        page: paginateState.page,
        sortBy: {
          direction: OrderDirection.Desc,
        },
      },
    });

  const { loadNextPage, updatePageSettings, pageInfo, loadPreviousPage } =
    paginate(caseBatchesData?.caseBatches?.pageInfo);

  const [importCase] = useImportCasesMutation({
    onCompleted: (e) =>
      onCompleteImportCases(e, () => refetchCaseBatchesData()),
  });
  const tabs = createFilterTab(setParams, paramsState);

  const { data } = useClientsQuery({
    variables: {
      limit: 100,
      page: 1,
    },
  });

  return (
    <>
      <CaseBatchListPage
        tabs={tabs}
        onImportCaseBatch={() => {
          openAction('OnImportCaseBatch');
        }}
        caseBatches={caseBatchesData?.caseBatches?.edges.map((e) => ({
          ...e.node,
        }))}
        pageInfo={pageInfo}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onUpdatePageSetting={updatePageSettings}
        paginateState={paginateState}
        totalCount={caseBatchesData?.caseBatches?.totalCount}
      />
      <CaseImportBatchDialog
        onClose={closeAction}
        open={isOpen === 'OnImportCaseBatch'}
        clients={data?.clients?.edges.map((client) => ({
          label: client.node?.name,
          value: client.node.id,
        }))}
        onSubmit={(e) =>
          importCase({
            variables: {
              file: e.file,
              input: {
                assignmentEndDate: e.assignment_end_date,
                assignmentStartDate: e.assignment_start_date,
                client: e.client.toString(),
              },
            },
          })
        }
      />
    </>
  );
};

export default CaseBatchList;
