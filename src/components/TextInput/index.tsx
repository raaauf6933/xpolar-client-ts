import classNames from 'classnames';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multipleline?: boolean;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
  rows?: number;
}

const TextInput = (props: TextInputProps) => {
  const { icon, onClickIcon, multipleline, rows } = props;
  return (
    <div className="mb-2">
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 "
      >
        {props.label}
      </label>
      <div className="inline-flex w-full justify-between">
        {!multipleline ? (
          <input
            {...props}
            className={classNames(
              'block w-full border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
              {
                ['bg-gray-50']: props.disabled,
                ['rounded-l-lg ']: props.icon,
                ['rounded-lg']: !props.icon,
              },
            )}
            disabled={props.disabled}
          />
        ) : (
          <textarea
            rows={rows ? rows : 4}
            className="block  w-full resize-none overflow-y-scroll rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            {...props}
          />
        )}

        {icon && !multipleline && (
          <div
            className={classNames(
              'inline  select-none rounded-r-lg border-y border-r border-gray-300 bg-gray-200 py-2 px-4 text-gray-600',
              {
                ['cursor-pointer']: props.onClickIcon,
              },
            )}
            onClick={onClickIcon}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
