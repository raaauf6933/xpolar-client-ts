import * as React from 'react';
import NavBar from '../NavBar';
import Menu from '../Menu';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex h-full pt-20">
        <Menu />
        <main className="w-full overflow-auto">
          <div className="px-9 py-4">
            {' '}
            <Outlet />
          </div>{' '}
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppLayout;
