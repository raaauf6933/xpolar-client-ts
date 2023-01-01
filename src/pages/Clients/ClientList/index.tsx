import * as React from 'react';
import ClientListPage from '../components/ClientListPage';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries';
import Drawer from '@/components/Drawer';
import Button from '@/components/Button';
import useActionDialog from '@/hooks/useActionDialog';
import { AgentListUrlDialog } from '../types';

const ClientList: React.FC = () => {
  const { data } = useQuery(GET_CLIENTS);

  const [openAction, closeAction, isOpen] =
    useActionDialog<AgentListUrlDialog>();

  return (
    <>
      <ClientListPage clients={data?.clients} />
      <Button onClick={() => openAction('onCreateClient')}>Open</Button>
      <Drawer open={isOpen === 'onCreateClient'} onClose={closeAction} />
    </>
  );
};

export default ClientList;
