import { useSearchParams } from 'react-router-dom';

type UseActionDialog<TAction extends string> = [
  (action: TAction) => void,
  () => void,
  TAction,
];

const useActionDialog = <
  TAction extends string,
>(): UseActionDialog<TAction> => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openAction = (name: string) => {
    searchParams.append('action', name);
    setSearchParams(searchParams);
  };

  const closeAction = () => {
    searchParams.delete('action');
    setSearchParams(searchParams);
  };

  const action = <TAction>searchParams.get('action');

  return [openAction, closeAction, action];
};

export default useActionDialog;
