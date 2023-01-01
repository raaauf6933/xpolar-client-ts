import * as React from 'react';

export interface ColumnType {
  label?: string;
  path?: string;
  key?: string | number;
  colSpan?: number;
  content?: (params: object | null | undefined) => React.ReactNode;
}
