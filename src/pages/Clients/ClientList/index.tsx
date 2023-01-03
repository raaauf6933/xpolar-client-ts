import * as React from 'react';
import ClientListPage from '../components/ClientListPage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries';
import useActionDialog from '@/hooks/useActionDialog';
import { AgentListUrlDialog } from '../types';
import ClientDrawerForm, {
  ClientFormData,
} from '../components/ClientDrawerForm';
import { CREATE_CLIENT } from '../mutation';
import { CommonStatus } from 'types/graphql';

const ClientList: React.FC = () => {
  const { data, refetch: refetchClients } = useQuery(GET_CLIENTS);

  const [createClient] = useMutation(CREATE_CLIENT, {
    onCompleted: () => refetchClients(),
  });

  const [openAction, closeAction, isOpen] =
    useActionDialog<AgentListUrlDialog>();

  const handleCreateClient = (val: ClientFormData) => {
    createClient({
      variables: {
        input: {
          name: val.name,
          status: val.status ? CommonStatus.Act : CommonStatus.Deact,
        },
      },
    });
  };
  return (
    <>
      <ClientListPage
        clients={data?.clients}
        onCreateClient={() => openAction('onCreateClient')}
      />

      <ClientDrawerForm
        open={isOpen === 'onCreateClient'}
        onClose={closeAction}
        handleCreateClient={(val) => handleCreateClient(val)}
      />
    </>
  );
};

export default ClientList;
