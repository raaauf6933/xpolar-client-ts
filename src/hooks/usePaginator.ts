import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageInfo } from 'types/graphql';

type Paginate = {
  pageInfo: PageInfo | undefined;
  loadNextPage: () => void;
  loadPreviousPage: () => void;
  updatePageSettings: (limit: string) => void;
};

const usePaginator = (): [
  (pageInfo: PageInfo | undefined) => Paginate,
  {
    page: number;
    limit: number;
  },
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultPagination = () => {
    !searchParams.get('page') && searchParams.append('page', '1');
    !searchParams.get('limit') && searchParams.append('limit', '10');
    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    defaultPagination();
  }, []);

  const paginate = (pageInfo: PageInfo | undefined): Paginate => {
    const loadNextPage = () => {
      searchParams.set('page', pageInfo?.next?.page?.toString() || '');
      setSearchParams(searchParams);
    };

    const loadPreviousPage = () => {
      searchParams.set('page', pageInfo?.previous?.page?.toString() || '');
      setSearchParams(searchParams);
    };

    const updatePageSettings = (limit: string) => {
      searchParams.set('limit', limit);
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    };

    return {
      loadNextPage,
      loadPreviousPage,
      pageInfo: {
        next: pageInfo?.next,
        previous: pageInfo?.previous,
        showing: pageInfo?.showing,
      },
      updatePageSettings,
    };
  };

  const paginateState = {
    limit: parseInt(searchParams.get('limit') || '10'),
    page: parseInt(searchParams.get('page') || '1'),
  };

  return [paginate, paginateState];
};

export default usePaginator;
