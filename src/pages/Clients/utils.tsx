import * as React from 'react';
import Badge from '@/components/Badge';
import { ColumnType } from '@/types';
import { Client } from '@gqltypes/graphql';
import moment from 'moment';

export const columns: ColumnType[] = [
  {
    label: 'ID',
    path: 'id',
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
        label={e?.status ? 'Active' : 'Deactivate'}
        color={e?.status ? 'success' : 'error'}
      />
    ),
  }));
};
