import Table from '@/components/Table';
import * as React from 'react';
import { columns, parseCasesData } from '../../utils';
import { useNavigate } from 'react-router-dom';
import CaseSearchForm from '@/components/CaseSearchForm';
import PageHeader from '@/components/PageHeader';
import { Case } from 'types/graphql';
import { ListProps } from '@/types';
import Pagination from '@/components/Pagination';

interface CaseListPageProps extends ListProps {
  cases: (Case | null)[] | null | undefined;
}

const CaseListPage: React.FC<CaseListPageProps> = (props) => {
  const {
    cases,
    onNextPage,
    onPreviousPage,
    onUpdatePageSetting,
    pageInfo,
    paginateState,
    totalCount,
  } = props;
  const navigate = useNavigate();

  const data = parseCasesData(cases);

  return (
    <>
      <PageHeader />
      <CaseSearchForm />
      <div className="mt-5 border border-solid p-4">
        <Table
          columns={columns}
          data={data}
          onRowClick={(row) => navigate(row?.id || '')}
        />
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
      </div>
    </>
  );
};

export default CaseListPage;
