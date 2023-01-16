import { toast } from 'react-toastify';
import { CreateClientMutation } from 'types/graphql';

export const onCompleteCreateClient = (
  data: CreateClientMutation,
  refetchClientsData: () => void,
) => {
  if (!data?.createClient?.errors) {
    toast('New Client has been created', {
      type: 'success',
    });
    refetchClientsData();
  } else {
    toast(data.createClient.errors[0]?.message, {
      type: 'error',
    });
  }
};
