import * as React from 'react';
import { PageInfo } from 'types/graphql';
export interface ColumnType {
  label?: string;
  path?: string;
  key?: string | number;
  colSpan?: number;
  content?: (params: object | null | undefined) => React.ReactNode;
}

export interface ListProps {
  pageInfo: PageInfo | undefined;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onUpdatePageSetting: (limit: string) => void;
  paginateState: {
    limit: number;
    page: number;
  };
  totalCount?: number;
}
