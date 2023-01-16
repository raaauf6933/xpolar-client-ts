import Card from '@/components/Card';
import Table from '@/components/Table';
import { currencyFormat } from '@/utils/currencyFormatter';
import moment from 'moment';
import React from 'react';

const CasePayment: React.FC = () => {
  return (
    <>
      <Card title="Payments">
        <Table
          columns={[
            {
              label: 'Payment Date',
              path: 'payment_date',
            },
            {
              label: 'Amount',
              path: 'payment_amount',
            },
          ]}
          data={[
            {
              payment_amount: currencyFormat(4000),
              payment_date: moment(new Date()).format('MM/DD/yyyy'),
            },
          ]}
        />
        <div className="mt-2 flex items-center p-2 text-center">
          <span className="mr-2 text-2xl">Total Payment:</span>
          <span className="text-lg">{currencyFormat(4000)}</span>
        </div>
      </Card>
    </>
  );
};

export default CasePayment;
