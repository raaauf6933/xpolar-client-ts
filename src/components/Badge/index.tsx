import classNames from 'classnames';
import * as React from 'react';

interface BadgeProps {
  label?: string;
  color?: 'primary' | 'success' | 'error';
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { color, label } = props;

  return (
    <span
      className={classNames(
        'mr-2 rounded px-2.5 py-0.5 text-xs font-semibold ',
        {
          ['bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800']:
            color === 'primary',
          ['bg-green-100 text-green-800  dark:bg-green-200 dark:text-green-900']:
            color === 'success',
          ['bg-red-100 text-red-800  dark:bg-red-200 dark:text-red-900']:
            color === 'error',
        },
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
