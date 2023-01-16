import * as React from 'react';
import Badge from '@/components/Badge';
import { ColumnType } from '@/types';
import { Client, CommonStatus } from 'types/graphql';
import moment from 'moment';

export const columns: ColumnType[] = [
  {
    label: 'ID',
    path: 'id',
  },
  {
    label: 'Code',
    path: 'code',
  },
  {
    label: 'Client Name',
    path: 'name',
  },
  {
    label: 'Date Added',
    path: 'createdAt',
  },
  {
    label: 'Status',
    path: 'status',
  },
];

export const parseData = (data: (Client | null)[] | null | undefined) => {
  return data?.map((e) => ({
    ...e,
    createdAt: moment(e?.createdAt).format('MM/DD/YYYY'),
    status: (
      <Badge
        label={e?.status === CommonStatus.Act ? 'Active' : 'Deactivate'}
        color={e?.status === CommonStatus.Act ? 'success' : 'error'}
      />
    ),
  }));
};
