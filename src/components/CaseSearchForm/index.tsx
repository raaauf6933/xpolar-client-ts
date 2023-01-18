import * as React from 'react';
import Card from '../Card';
import TextInput from '../TextInput';
import Button from '../Button';
import { ReactSVG } from 'react-svg';
import list_icon from '@assets/icons/list_icon.svg';
import BatchInputDialog from './components/BatchInputDialog';
import { CaseSearchFormUrlDialog } from './types';
import Form from '../Form';
import useActionDialog from '@/hooks/useActionDialog';
import useCaseFilter from './useCaseFilter';
import _ from 'lodash';
import SingleSelect from '../SingleSelect';
import { caseDepartmentChoices, caseStatusChoices } from './utils';

type InitialValuesTypes = {
  batchNumber: string;
  firstName: string;
  lastName: string;
  status: string;
  clientReference: string;
  department: string;
  birthDate: string;
  debtorId: string;
};

const CaseSearchForm: React.FC = () => {
  const [setFilter, queryParams, resetFilter] =
    useCaseFilter<InitialValuesTypes>();

  const initialValues: InitialValuesTypes = {
    batchNumber: queryParams.batchNumber || '',
    birthDate: queryParams.birthDate || '',
    clientReference: queryParams.clientReference || '',
    debtorId: queryParams.debtorId || '',
    department: queryParams.department || '',
    firstName: queryParams.firstName || '',
    lastName: queryParams.lastName || '',
    status: queryParams.status || '',
  };

  const [openAction, onClose, action] =
    useActionDialog<CaseSearchFormUrlDialog>();

  const onSubmit = (values: InitialValuesTypes) => {
    const formValues = values;

    Object.keys(formValues).forEach((key) => {
      if (!values[key as keyof InitialValuesTypes])
        delete values[key as keyof InitialValuesTypes];
    });
    setFilter(() => ({
      ...formValues,
    }));
  };

  return (
    <>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, values, setValues }) => {
          const onResetHandler = () => {
            const resetState = _.mapValues(initialValues, () => '');
            setValues(resetState);
          };
          return (
            <Card
              title="Search Cases"
              actions={
                <div className="flex justify-end">
                  <Button color="primary" onClick={() => handleSubmit()}>
                    Search
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      resetFilter();
                      onResetHandler();
                    }}
                  >
                    Reset
                  </Button>
                </div>
              }
            >
              <>
                <div className="grid grid-cols-3 gap-4">
                  <TextInput
                    label="Batch Number:"
                    placeholder="Ex. 20100,20200,..."
                    name="batchNumber"
                    value={values.batchNumber}
                    onChange={handleChange}
                    icon={<ReactSVG src={list_icon} />}
                    onClickIcon={() => openAction('OnInputBulkBatchNumber')}
                  />
                  <TextInput
                    label="Client Reference:"
                    name="clientReference"
                    value={values.clientReference}
                    placeholder="Ex. 192251"
                    onChange={handleChange}
                  />
                  <TextInput
                    label="ID of Debtor:"
                    placeholder="Ex. 192251"
                    name="debtorId"
                    value={values.debtorId}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="First Name:"
                    name="firstName"
                    placeholder="Ex. Aida"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Last Name:"
                    placeholder="Ex. Bugg"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <TextInput label="Birth Date:" type="date" name="" />
                  <SingleSelect
                    choices={caseStatusChoices}
                    label="Status:"
                    onChange={handleChange}
                    name="status"
                    value={values.status}
                  />
                  <SingleSelect
                    choices={caseDepartmentChoices}
                    label="Department:"
                    name="department"
                    onChange={handleChange}
                    value={values.department}
                  />
                </div>
                <BatchInputDialog
                  onChange={handleChange}
                  name="batchNumber"
                  open={action === 'OnInputBulkBatchNumber'}
                  onClose={onClose}
                />
              </>
            </Card>
          );
        }}
      </Form>
    </>
  );
};

export default CaseSearchForm;
