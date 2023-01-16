import * as React from 'react';
import ClientListPage from '../../components/ClientListPage';
import { useMutation } from '@apollo/client';
import { useClientsQuery } from '../../queries';
import useActionDialog from '@/hooks/useActionDialog';
import { ClientListUrlDialog } from '../../types';
import ClientDrawerForm, {
  ClientFormData,
} from '../../components/ClientDrawerForm';
import { CREATE_CLIENT } from '../../mutation';
import { CommonStatus } from 'types/graphql';
import usePaginator from '@/hooks/usePaginator';
import { onCompleteCreateClient } from '../../handlers';

const ClientList: React.FC = () => {
  const [paginate, paginateState] = usePaginator();

  const { data, refetch: refetchClients } = useClientsQuery({
    variables: {
      limit: paginateState.limit,
      page: paginateState.page,
    },
  });

  const { loadNextPage, updatePageSettings, pageInfo, loadPreviousPage } =
    paginate(data?.clients?.pageInfo);

  const [createClient] = useMutation(CREATE_CLIENT, {
    onCompleted: (e) => onCompleteCreateClient(e, () => refetchClients()),
  });

  const [openAction, closeAction, isOpen] =
    useActionDialog<ClientListUrlDialog>();

  const handleCreateClient = (val: ClientFormData) => {
    createClient({
      variables: {
        input: {
          code: parseInt(val.code),
          name: val.name,
          status: val.status ? CommonStatus.Act : CommonStatus.Deact,
        },
      },
    });
  };
  return (
    <>
      <ClientListPage
        clients={data?.clients?.edges.map((e) => e.node)}
        onCreateClient={function () {
          openAction('onCreateClient');
        }}
        pageInfo={pageInfo}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onUpdatePageSetting={updatePageSettings}
        paginateState={paginateState}
        totalCount={data?.clients?.totalCount}
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
