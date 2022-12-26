import React from 'react';
import { currencyFormat } from '@/utils/currencyFormatter';
import Card from '../Card';
import Badge from '../Badge';

const DebtorDetailsCard: React.FC = () => {
  return (
    <Card
      title={
        <>
          <Badge color="success" label="Active" size="large" />
        </>
      }
    >
      <div className="grid grid-cols-3 gap-5 min-[320px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
        <div className="flex">
          <span className="mr-2 font-bold">Client Reference No.:</span>
          <span>30214</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Debtor Name:</span>
          <span>Juan Dela Cruz</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Reference No.:</span>
          <span>20100252</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Birth Date:</span>
          <span>20100252</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Gender:</span>
          <span>Male</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Client Name:</span>
          <span>A.B.C Company</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Original Capital</span>
          <span>{currencyFormat(32000)}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Actual Capital</span>
          <span>{currencyFormat(15000)}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">DPD:</span>
          <span>60</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Actual DPD:</span>
          <span>32</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Assignment Start Date:</span>
          <span>2020/01/01</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Assignment End date:</span>
          <span>2020/01/31</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Department:</span>
          <span>1st Collection</span>
        </div>
      </div>
    </Card>
  );
};

export default DebtorDetailsCard;
