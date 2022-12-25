import * as React from 'react';
import NavBar from '../NavBar';
import Menu from '../Menu';
import { Outlet } from 'react-router-dom';

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
    </div>
  );
};

export default AppLayout;
