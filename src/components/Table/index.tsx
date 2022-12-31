import { ColumnType } from '@/types';
import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';

interface TableProps<T> {
  columns: ColumnType[];
  data: T[] | null | undefined;
  hoverable?: boolean;
  onRowClick?: (item: T) => void;
  size?: 'small' | 'default' | 'large';
}

const Table = <T extends object | null | undefined>(props: TableProps<T>) => {
  const { columns, data, onRowClick, size } = props;

  const renderCell = (item: unknown, column: ColumnType): React.ReactNode => {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path ? column.path : '');
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns?.map((thead, index) => (
              <th key={index} scope="col" className="py-3 px-6">
                {thead.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data?.length !== 0
            ? data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {columns.map((column, index) => (
                    <td
                      key={index}
                      className={classNames('py-4 px-6', {
                        'py-2 text-xs': size === 'small',
                        'py-3 text-base': size === 'default',
                        'py-4 text-xl': size === 'large',
                      })}
                    >
                      {renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
