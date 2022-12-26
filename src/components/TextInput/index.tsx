import classNames from 'classnames';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import {
  UseFormRegister,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';

interface TextInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multipleline?: boolean;
  className?: string;
  name: Path<UnPackAsyncDefaultValues<T>>;
  required?: boolean;
  label?: string;
  register?: UseFormRegister<T>;
}

const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { name, register, required } = props;
  name;
  return (
    <div>
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 "
      >
        {props.label}
      </label>

      <input
        {...props}
        {...(register
          ? {
              ...register(name, {
                required,
              }),
            }
          : {})}
        required={false}
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
