import { setFilterCallBack } from '@/hooks/useFilter';
import { ColumnType } from '@/types';
import { ImportCasesQueryParams } from './types';

export const columns: ColumnType[] = [
  {
    label: 'ID',
    path: 'id',
  },
  {
    label: 'Client ID',
    path: 'client_id',
  },
  {
    label: 'Reference No.',
    path: 'reference_number',
  },
  {
    label: 'Assignment Start Date',
    path: 'assignment_start_date',
  },
  {
    label: 'Assignment End Date',
    path: 'assignment_end_date',
  },
  {
    label: 'No. Cases',
    path: 'no_cases',
  },
  {
    label: 'Date Created',
    path: 'createdAt',
  },
  {
    label: 'Status',
    path: 'status',
  },
];

export const createFilterTab = (
  setParams: (cb: setFilterCallBack<ImportCasesQueryParams>) => void,
  paramsState: ImportCasesQueryParams,
) => {
  return [
    {
      action: () =>
        setParams((params) => ({
          ...params,
          status: 'all',
        })),
      active: paramsState.status === 'all',
      label: 'All',
    },
    {
      action: () =>
        setParams((params) => ({
          ...params,
          status: 'success',
        })),
      active: paramsState.status === 'success',
      label: 'Success',
    },
    {
      action: () =>
        setParams((params) => ({
          ...params,
          status: 'uploading',
        })),
      active: paramsState.status === 'uploading',
      label: 'Uploading',
    },
    {
      action: () =>
        setParams((params) => ({
          ...params,
          status: 'failed',
        })),
      active: paramsState.status === 'failed',
      label: 'Failed',
    },
  ];
};
