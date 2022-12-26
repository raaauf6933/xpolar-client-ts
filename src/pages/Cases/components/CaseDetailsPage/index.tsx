import * as React from 'react';

import DebtorDetailsCard from '@/components/DebtorDetailsCard';
import DebtorCaseDetails from '../DebtorCaseDetails';

const CaseDetailsPage: React.FC = () => {
  return (
    <>
      <DebtorDetailsCard />
      <div className="pt-7">
        <DebtorCaseDetails />
      </div>
    </>
  );
};

export default CaseDetailsPage;
