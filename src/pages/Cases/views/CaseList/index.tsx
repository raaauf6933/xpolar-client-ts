import React from 'react';
import CaseListPage from '../../components/CaseListPage';
import { useCasesListQuery } from '../../queries';
import { OrderDirection } from 'types/graphql';
import usePaginator from '@/hooks/usePaginator';
import useFilter from '@/hooks/useFilter';
import { CasesQueryParams } from '../../types';
import { getQueryFilter } from '../../utils';

const CaseList: React.FC = () => {
  const [, paramsState] = useFilter<CasesQueryParams>();
  const [paginate, paginateState] = usePaginator();
  const { data: casesData } = useCasesListQuery({
    variables: {
      filter: getQueryFilter(paramsState),
      limit: paginateState.limit,
      page: paginateState.page,
      sortBy: {
        direction: OrderDirection.Desc,
      },
    },
  });

  const { loadNextPage, updatePageSettings, pageInfo, loadPreviousPage } =
    paginate(casesData?.cases?.pageInfo);

  return (
    <>
      <CaseListPage
        cases={casesData?.cases?.edges.map((e) => e.node)}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onUpdatePageSetting={updatePageSettings}
        pageInfo={pageInfo}
        paginateState={paginateState}
        totalCount={casesData?.cases?.totalCount}
      />
    </>
  );
};

export default CaseList;
