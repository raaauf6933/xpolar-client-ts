import React from 'react';
import CaseListPage from '../components/CaseListPage';
import { getFakeCases } from '@/utils/fakeData';

const CaseList: React.FC = () => {
  const data = getFakeCases();
  console.log(process.env.URL);
  return (
    <>
      <div className="mt-5">
        <CaseListPage data={data} />
      </div>
    </>
  );
};

export default CaseList;
