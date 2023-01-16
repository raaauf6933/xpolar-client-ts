import Button from '@/components/Button';
import SingleSelect from '@/components/SingleSelect';
import Dialog, { DialogProps } from '@/components/Dialog';
import Form from '@/components/Form';
import TextInput from '@/components/TextInput';
import { FormikHelpers } from 'formik';
import React from 'react';
import SingleUpload from '@/components/SingleUpload';
import { ImportCasesMutation } from 'types/graphql';
import { FetchResult } from '@apollo/client';

type CaseImportBatchInitValue = {
  file: [];
  client: number;
  assignment_start_date: string;
  assignment_end_date: string;
};

interface CaseImportBatchDialogProps extends DialogProps {
  onSubmit: (
    data: CaseImportBatchInitValue,
  ) => Promise<FetchResult<ImportCasesMutation>>;
  clients:
    | { label: string | undefined | null; value: string | number }[]
    | undefined;
}

const CaseImportBatchDialog = (
  props: CaseImportBatchDialogProps,
): JSX.Element => {
  const { open, onClose, clients, onSubmit } = props;

  const initialValues: CaseImportBatchInitValue = {
    assignment_end_date: new Date().toISOString().split('T')[0],
    assignment_start_date: new Date().toISOString().split('T')[0],
    client: 1,
    file: [],
  };

  const handleSubmit = async <T extends object>(
    values: CaseImportBatchInitValue,
    _opts: FormikHelpers<T>,
  ): Promise<any> => {
    const result = await onSubmit(values);
    if (!result.data?.importCases?.errors) {
      onClose();
      _opts.resetForm();
    }
  };

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <>
          <Dialog
            open={open}
            onClose={onClose}
            title="Import Batch"
            actions={
              <>
                <Button onClick={() => handleSubmit()} color="primary">
                  Validate & Import
                </Button>
              </>
            }
          >
            <SingleSelect
              label="Client"
              name="client"
              value={values.client}
              onChange={handleChange}
              choices={clients}
            />

            <TextInput
              label="Assignment Start Date"
              name="assignment_start_date"
              type="date"
              value={values.assignment_start_date}
              onChange={handleChange}
            />
            <TextInput
              label="Assignment End Date"
              name="assignment_end_date"
              type="date"
              value={values.assignment_end_date}
              onChange={handleChange}
            />
            <SingleUpload
              name="file"
              label="Upload File"
              accept=".csv"
              {...(Array.isArray(values.file) ? { value: '' } : null)}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: 'file',
                    value: e?.target?.files ? e?.target?.files[0] : null,
                  },
                })
              }
              description="CSV file only"
            />
          </Dialog>
        </>
      )}
    </Form>
  );
};

export default CaseImportBatchDialog;
