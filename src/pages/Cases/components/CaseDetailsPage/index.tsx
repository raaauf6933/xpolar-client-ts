import * as React from 'react';

import DebtorDetailsCard from '@/components/DebtorDetailsCard';
import DebtorCaseDetails from '../DebtorCaseDetails';
import PageHeader from '@/components/PageHeader';

const CaseDetailsPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <DebtorDetailsCard />
      <div className="pt-7">
        <DebtorCaseDetails />
      </div>
    </>
  );
};

export default CaseDetailsPage;
