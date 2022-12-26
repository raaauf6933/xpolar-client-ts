import React from 'react';
import CaseListPage from '../components/CaseListPage';
import { getFakeCases } from '@/utils/fakeData';

const CaseList: React.FC = () => {
  const data = getFakeCases();

  return (
    <>
      <CaseListPage data={data} />
    </>
  );
};

export default CaseList;
