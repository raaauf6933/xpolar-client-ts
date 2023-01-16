import React from 'react';
import CaseDetailsPage from '../../components/CaseDetailsPage';
import { useCaseQuery } from '../../queries';
import { useParams } from 'react-router-dom';
import CaseDetailsProvider from '@/context/CaseDetailsContext';

const CaseDetails = () => {
  const params = useParams();

  const { data } = useCaseQuery({
    variables: {
      id: params.id || '',
    },
  });

  return (
    <>
      <CaseDetailsProvider data={data?.case}>
        <CaseDetailsPage />
      </CaseDetailsProvider>
    </>
  );
};

export default CaseDetails;
