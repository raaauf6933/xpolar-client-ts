import * as React from 'react';
import ClientListPage from '../components/ClientListPage';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries';

const ClientList: React.FC = () => {
  const { data } = useQuery(GET_CLIENTS);

  return (
    <>
      <ClientListPage clients={data?.clients} />
    </>
  );
};

export default ClientList;
