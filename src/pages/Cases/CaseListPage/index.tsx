import CaseSearchForm from '@/components/CaseSearchForm';
import React from 'react';
import CaseList from '../components/CaseList';
import { getFakeCases } from '@/utils/fakeData';

const CaseListPage: React.FC = () => {
  const data = getFakeCases();

  return (
    <>
      <CaseSearchForm />
      <div className="mt-5">
        <CaseList data={data} />
      </div>
    </>
  );
};

export default CaseListPage;
