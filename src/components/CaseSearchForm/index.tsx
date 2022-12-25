import * as React from 'react';
import Card from '../Card';
import TextInput from '../TextInput';
import Button from '../Button';

// interface CaseSearchFormProps {}

const CaseSearchForm: React.FC = () => {
  return (
    <>
      <Card
        title="Search Cases"
        actions={
          <div className="flex justify-end">
            <Button color="primary">Search</Button>
            <Button color="error">Reset</Button>
          </div>
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <TextInput label="Batch Number:" />
          <TextInput label="Client Reference:" />
          <TextInput label="ID of Debtor:" />
          <TextInput label="First Name:" />
          <TextInput label="Last Name:" />
          <TextInput label="Birth Date:" />
          <TextInput label="Status:" />
          <TextInput label="Department:" />
        </div>
      </Card>
    </>
  );
};

export default CaseSearchForm;
