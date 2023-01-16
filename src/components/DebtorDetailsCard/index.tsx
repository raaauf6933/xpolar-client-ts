import React, { useContext } from 'react';
import { currencyFormat } from '@/utils/currencyFormatter';
import Card from '../Card';
import Badge from '../Badge';
import moment from 'moment';
import { CaseDetailsContext } from '@/context/CaseDetailsContext';

const DebtorDetailsCard: React.FC = () => {
  const data = useContext(CaseDetailsContext);

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
          <span className="mr-2 font-bold">Reference No.:</span>
          <span>{data?.caseReference}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Debtor Name:</span>
          <span>
            {data?.person?.firstName} {data?.person?.lastName}
          </span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Client Reference No.:</span>
          <span>{data?.clientReference}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Birth Date:</span>
          <span>{data?.person?.birthDay}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Gender:</span>
          <span>{data?.person?.gender}</span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Client Name:</span>
          <span>{data?.caseBatch?.client?.name}</span>
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
          <span>
            {moment(data?.caseBatch?.assignmentStartDate).format('MM/DD/YYYY')}
          </span>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Assignment End date:</span>
          <span>
            {moment(data?.caseBatch?.assignmentEndDate).format('MM/DD/YYYY')}
          </span>
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
