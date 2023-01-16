import React from 'react';
import Card from '@/components/Card';
import Table from '@/components/Table';
import { columns } from '../../utils';
import Pagination from '@/components/Pagination';
import { ListProps } from '@/types';

interface ClientListProps<T> extends ListProps {
  data: T[] | undefined;
}

const ClientList = <T extends object>(props: ClientListProps<T>) => {
  const {
    data,
    onUpdatePageSetting,
    pageInfo,
    onNextPage,
    onPreviousPage,
    paginateState,
    totalCount,
  } = props;
  return (
    <Card>
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
    </Card>
  );
};

export default ClientList;
