import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface SingleUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: React.ReactNode;
}

const SingleUpload = (props: SingleUploadProps): JSX.Element => {
  const { label, description } = props;
  return (
    <>
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        {...props}
        type="file"
        className={classNames(
          'block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
          {
            ['bg-gray-50']: props.disabled,
          },
        )}
        disabled={props.disabled}
      />
      <span
        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        {description}
      </span>
    </>
  );
};

export default SingleUpload;
