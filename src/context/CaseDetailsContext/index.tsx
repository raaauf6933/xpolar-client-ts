import * as React from 'react';
import { Case } from 'types/graphql';

interface ToastProviderProps {
  children: React.ReactNode;
  data?: Case | null;
}

export const CaseDetailsContext = React.createContext<Case | null | undefined>(
  null,
);

const ToastProvider = (props: ToastProviderProps): JSX.Element => {
  const { children, data } = props;

  return (
    <CaseDetailsContext.Provider value={data}>
      {children}
    </CaseDetailsContext.Provider>
  );
};

export default ToastProvider;
