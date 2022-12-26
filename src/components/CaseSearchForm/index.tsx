import * as React from 'react';
import Card from '../Card';
import TextInput from '../TextInput';
import Button from '../Button';

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
          <TextInput label="Batch Number:" name="" />
          <TextInput label="Client Reference:" name="" />
          <TextInput label="ID of Debtor:" name="" />
          <TextInput label="First Name:" name="" />
          <TextInput label="Last Name:" name="" />
          <TextInput label="Birth Date:" name="" />
          <TextInput label="Status:" name="" />
          <TextInput label="Department:" name="" />
        </div>
      </Card>
    </>
  );
};

export default CaseSearchForm;
