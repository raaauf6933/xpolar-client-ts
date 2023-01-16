import React from 'react';
import { parseData } from '../../utils';
import { Client } from 'types/graphql';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import ClientList from '../ClientList';
import { ListProps } from '@/types';
// import BreadCrumb from '@/components/BreadCrumb';

interface ClientListPageProps extends ListProps {
  clients: (Client | null)[] | null | undefined;
  onCreateClient: () => void;
}

const ClientListPage = (props: ClientListPageProps): JSX.Element => {
  const { onCreateClient } = props;
  const data = parseData(props.clients);

  return (
    <>
      <PageHeader
        title="Clients"
        action={
          <Button onClick={onCreateClient} color="primary">
            Create New Client
          </Button>
        }
      />
      <ClientList data={data} {...props} />
    </>
  );
};

export default ClientListPage;
