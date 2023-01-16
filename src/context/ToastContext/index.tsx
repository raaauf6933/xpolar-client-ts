import Toast from '@/components/Toast';
import * as React from 'react';

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = React.createContext(null);

const ToastProvider = (props: ToastProviderProps): JSX.Element => {
  const { children } = props;

  return (
    <ToastContext.Provider value={null}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
