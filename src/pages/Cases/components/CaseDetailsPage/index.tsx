import * as React from 'react';

import DebtorDetailsCard from '@/components/DebtorDetailsCard';
import DebtorCaseDetails from '../DebtorCaseDetails';
import BreadCrumb from '@/components/BreadCrumb';

const CaseDetailsPage: React.FC = () => {
  return (
    <>
      <BreadCrumb />
      <DebtorDetailsCard />
      <div className="pt-7">
        <DebtorCaseDetails />
      </div>
    </>
  );
};

export default CaseDetailsPage;
