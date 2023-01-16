import Card from '@/components/Card';
import Table from '@/components/Table';
import { CaseDetailsContext } from '@/context/CaseDetailsContext';
import React, { useContext } from 'react';

const CaseAddress: React.FC = () => {
  const data = useContext(CaseDetailsContext);

  const addresses = data?.person?.address?.map((e) => ({
    address: e?.address,
    city: e?.city,
    region: e?.region,
    status: 'Active',
    type: 'Permanent Address',
    zip_code: e?.zipCode,
  }));
  return (
    <>
      {' '}
      <Card title="Payments">
        <Table
          columns={[
            {
              label: 'Address',
              path: 'address',
            },
            {
              label: 'City',
              path: 'city',
            },
            {
              label: 'Zip Code',
              path: 'zip_code',
            },
            {
              label: 'Region',
              path: 'region',
            },
            {
              label: 'Type',
              path: 'type',
            },
            {
              label: 'Status',
              path: 'status',
            },
          ]}
          data={addresses}
        />
      </Card>
    </>
  );
};

export default CaseAddress;
