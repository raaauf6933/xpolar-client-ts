import Card from '@/components/Card';
import Table from '@/components/Table';
import * as React from 'react';

const CaseAttribute: React.FC = () => {
  return (
    <>
      {' '}
      <Card title="Payments">
        <Table
          columns={[
            {
              label: 'Name',
              path: 'name',
            },
            {
              label: 'Value',
              path: 'value',
            },
          ]}
          data={[
            {
              name: <span className="font-bold">Principal Loan</span>,
              value: '3000',
            },
            {
              name: <span className="font-bold">Lifetime ID</span>,
              value: 'FDF21',
            },
            {
              name: <span className="font-bold">Employer Name</span>,
              value: 'A.B.C Company',
            },
            {
              name: <span className="font-bold">Employment Position</span>,
              value: 'Software Developer',
            },
          ]}
        />
      </Card>
    </>
  );
};

export default CaseAttribute;
