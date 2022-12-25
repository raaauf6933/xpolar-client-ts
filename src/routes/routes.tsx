import * as React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import CaseListPage from '@/pages/Cases/CaseListPage';
import AppLayout from '@/components/AppLayout';
import DashBoard from '@/pages/Dashboard';

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <DashBoard />,
        path: '/',
      },
      {
        children: [
          {
            element: <CaseListPage />,
            index: true,
          },
          {
            element: <h1>ids</h1>,
            path: ':id',
          },
          {
            element: <h1>create</h1>,
            path: 'create',
          },
        ],
        path: '/cases',
      },
    ],
    element: <AppLayout />,
    errorElement: <Navigate to="/" />,
  },
]);
