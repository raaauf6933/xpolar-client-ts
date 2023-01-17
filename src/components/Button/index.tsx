import classNames from 'classnames';
import * as React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<
    HTMLButtonElement | HTMLFormElement | undefined
  > {
  label?: string;
  className?: string;
  color?: 'primary' | 'error' | 'default';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, label, children, color } = props;

  if (disabled) {
    return (
      <button
        type="button"
        name={props.name}
        className={classNames(
          'mr-2 rounded-lg  border border-gray-300  bg-gray-100 px-5 py-2.5 text-sm  font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
        )}
        {...props}
      >
        {label || children}
      </button>
    );
  }

  return (
    <button
      type="button"
      name={props.name}
      className={classNames(
        'mr-2  rounded-lg bg-white px-5 py-2.5 text-sm font-medium ',
        {
          [' bg-red-700   text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900']:
            color === 'error',
          ['bg-blue-700  text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800']:
            color === 'primary',
          ['border border-gray-400 bg-white text-gray-900  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700']:
            !color || color === 'default',
        },
      )}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;
