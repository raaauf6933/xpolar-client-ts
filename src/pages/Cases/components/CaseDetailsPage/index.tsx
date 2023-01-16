import * as React from 'react';
import DebtorDetailsCard from '@/components/DebtorDetailsCard';
import PageHeader from '@/components/PageHeader';
import CaseDetailsSection from '../CaseDetailsSection';

const CaseDetailsPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <DebtorDetailsCard />
      <CaseDetailsSection />
    </>
  );
};

export default CaseDetailsPage;
