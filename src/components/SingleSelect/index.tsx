import classNames from 'classnames';
import React from 'react';

interface SingleSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  choices:
    | { label: string | null | undefined; value: string | number }[]
    | undefined;
}

const SingleSelect = (props: SingleSelectProps): JSX.Element => {
  const { choices, label } = props;
  return (
    <>
      <div>
        <label
          htmlFor="small"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          {...props}
          className={classNames(
            'mb-6 block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500',
            {
              ['bg-gray-50']: props.disabled,
            },
          )}
        >
          {choices &&
            choices.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default SingleSelect;
