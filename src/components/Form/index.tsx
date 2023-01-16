import { Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';

interface FormProps<T> {
  children: (props: FormikProps<T>) => React.ReactNode;
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<T>;
}

const Form = <T extends object>(props: FormProps<T>): JSX.Element => {
  const { children, initialValues, onSubmit } = props;
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(opts) => (
        <>
          {' '}
          <form onSubmit={opts.handleSubmit}>{children(opts)}</form>
        </>
      )}
    </Formik>
  );
};

export default Form;
