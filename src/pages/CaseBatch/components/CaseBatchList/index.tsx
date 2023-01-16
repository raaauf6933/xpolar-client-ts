import Table from '@/components/Table';
import * as React from 'react';
import { columns } from '../../utils';
import moment from 'moment';
import Indicator from '@/components/Indicator';
import { CaseBatch, CaseBatchStatus } from 'types/graphql';
import { ListProps } from '@/types';
import Pagination from '@/components/Pagination';

interface CaseBatchListProps extends ListProps {
  caseBatches: (CaseBatch | null)[] | null | undefined;
}

const CaseBatchList: React.FC<CaseBatchListProps> = (props) => {
  const {
    caseBatches,
    onNextPage,
    onPreviousPage,
    onUpdatePageSetting,
    pageInfo,
    paginateState,
    totalCount,
  } = props;

  const data = caseBatches?.map((caseBatch) => ({
    assignment_end_date: moment(caseBatch?.assignmentEndDate).format(
      'MM/DD/yyyy',
    ),
    assignment_start_date: moment(caseBatch?.assignmentStartDate).format(
      'MM/DD/yyyy',
    ),
    client_id: caseBatch?.client?.id,
    createdAt: moment(caseBatch?.createdAt).format('MM/DD/yyyy'),
    id: caseBatch?.id,
    no_cases: '277',
    reference_number: caseBatch?.batchReference,
    status: (
      <Indicator
        state={
          caseBatch?.status === CaseBatchStatus.Uploading
            ? 'loading'
            : caseBatch?.status === CaseBatchStatus.Success
            ? 'success'
            : 'failed'
        }
        label={{ loading: 'uploading...' }}
      />
    ),
  }));
  return (
    <>
      <Table columns={columns} data={data} />
      <Pagination
        hasNext={pageInfo?.next !== null}
        hasPrevious={pageInfo?.previous !== null}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        onUpdatePageSetting={onUpdatePageSetting}
        paginateState={paginateState}
        totalCounts={totalCount}
        showing={pageInfo?.showing}
      />
    </>
  );
};

export default CaseBatchList;
