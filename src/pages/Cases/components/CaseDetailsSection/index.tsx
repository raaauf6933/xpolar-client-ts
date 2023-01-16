import React from 'react';
import DebtorCaseDetails from '../DebtorCaseDetails';
import Tabs from '@/components/Tabs';
import { createCaseSectionTabs } from '../../utils';
import { CaseSection } from '../../types';
import CasePayment from '../CasePayment';
import CaseAddress from '../CaseAddress';
import CaseAttribute from '../CaseAttribute';

const Sections = (state: CaseSection | null) => {
  switch (state) {
    case 'case':
      return <DebtorCaseDetails />;
    case 'payment':
      return <CasePayment />;
    case 'addresses':
      return <CaseAddress />;
    case 'debtAttributes':
      return <CaseAttribute />;
    default:
      return null;
  }
};

const CaseDetailsSection: React.FC = () => {
  const { tabs, state } = createCaseSectionTabs<CaseSection>('case');

  return (
    <div className="pt-7">
      <Tabs tabs={tabs} />
      {Sections(state)}
    </div>
  );
};

export default CaseDetailsSection;
