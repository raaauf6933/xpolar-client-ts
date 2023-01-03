import Button from '@/components/Button';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
import TextInput from '@/components/TextInput';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';

export type ClientFormData = {
  name: string;
  status: boolean;
};

interface ClientDrawerFormProps {
  open: boolean;
  onClose: () => void;
  handleCreateClient: (values: ClientFormData) => void;
}

const ClientDrawerForm = (props: ClientDrawerFormProps): JSX.Element => {
  const { handleCreateClient, onClose } = props;
  const initialValues: ClientFormData = {
    name: '',
    status: false,
  };

  const onSubmit = <T extends object>(
    values: ClientFormData,
    opts: FormikHelpers<T>,
  ) => {
    handleCreateClient(values);
    opts.resetForm();
    onClose();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Drawer
              title="Create Client"
              open={props.open}
              onClose={props.onClose}
              actions={
                <>
                  <Button
                    type="submit"
                    onClick={() => handleSubmit}
                    color="primary"
                  >
                    Save
                  </Button>
                </>
              }
            >
              <TextInput
                name="name"
                label="Client Name"
                onChange={handleChange}
                value={values.name}
              />
              <Switch
                name="status"
                label="Status"
                checkLabel="Active"
                unCheckLabel="Deactivate"
                checked={values.status}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: 'status',
                      value: e.target.checked,
                    },
                  })
                }
              />
            </Drawer>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ClientDrawerForm;
