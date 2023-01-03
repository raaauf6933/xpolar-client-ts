import Card from '@/components/Card';
import Table from '@/components/Table';
import React from 'react';
import { columns, parseData } from '../../utils';
import { Client } from 'types/graphql';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
// import BreadCrumb from '@/components/BreadCrumb';

interface ClientListPageProps {
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
      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </>
  );
};

export default ClientListPage;
