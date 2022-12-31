import Card from '@/components/Card';
import Table from '@/components/Table';
import React from 'react';
import { columns, parseData } from '../../utils';
import { Client } from '@gqltypes/graphql';

interface ClientListPageProps {
  clients: (Client | null)[] | null | undefined;
}

const ClientListPage = (props: ClientListPageProps): JSX.Element => {
  const data = parseData(props.clients);

  return (
    <Card>
      <Table columns={columns} data={data} />
    </Card>
  );
};

export default ClientListPage;
