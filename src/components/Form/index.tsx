import { Formik, FormikConfig, FormikValues } from 'formik';
import React from 'react';

const Form = <Values extends FormikValues = FormikValues, ExtraProps = object>(
  props: FormikConfig<Values> & ExtraProps,
): JSX.Element => {
  const { children, initialValues, onSubmit } = props;

  const formChildren = children as <T extends object>(
    props: T,
  ) => React.ReactNode;
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(opts) => (
        <>
          {' '}
          <form onSubmit={opts.handleSubmit}>{formChildren(opts)}</form>
        </>
      )}
    </Formik>
  );
};

export default Form;
