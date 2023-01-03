import classNames from 'classnames';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multipleline?: boolean;
  className?: string;
  label?: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 "
      >
        {props.label}
      </label>

      <input
        {...props}
        className={classNames(
          'block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
          {
            ['bg-gray-50']: props.disabled,
          },
        )}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TextInput;
