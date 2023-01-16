import { numberFormat } from '@/utils/currencyFormatter';
import classNames from 'classnames';
import React from 'react';
import { PaginationItems } from 'types/graphql';

interface PaginationProps {
  hasNext: boolean;
  hasPrevious: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onUpdatePageSetting: (limit: string) => void;
  paginateState: {
    page: number;
    limit: number;
  };
  totalCounts?: number;
  showing?: PaginationItems | null;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const {
    onUpdatePageSetting,
    hasPrevious,
    hasNext,
    onNextPage,
    onPreviousPage,
    paginateState,
    totalCounts,
    showing,
  } = props;

  return (
    <div className="flex items-center py-4 ">
      <div className="w-full grow-[1]">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {showing?.from}
          </span>{' '}
          to{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {showing?.to}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {numberFormat(totalCounts || 0)}
          </span>{' '}
          Entries
        </span>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-3">
          <select
            onChange={(e) => onUpdatePageSetting(e.target.value)}
            value={paginateState.limit}
            className="w-16  border-b-2  border-gray-300 p-2  text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="flex items-center">
          <button
            disabled={!hasPrevious}
            onClick={onPreviousPage}
            className={classNames(
              'mr-3 inline-flex items-center rounded-full border border-gray-300 bg-white  p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              {
                'hover:none bg-gray-100 hover:bg-gray-100 hover:text-gray-500':
                  !hasPrevious,
              },
            )}
          >
            <svg
              aria-hidden="true"
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={onNextPage}
            disabled={!hasNext}
            className={classNames(
              'mr-3 inline-flex items-center rounded-full border border-gray-300 bg-white  p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              {
                'hover:none bg-gray-100 hover:bg-gray-100 hover:text-gray-500':
                  !hasNext,
              },
            )}
          >
            <svg
              aria-hidden="true"
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
