import * as React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import CaseList from '@/pages/Cases/CaseList';
import AppLayout from '@/components/AppLayout';
import DashBoard from '@/pages/Dashboard';
import CaseDetails from '@/pages/Cases/CaseDetails';

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
            element: <CaseList />,
            index: true,
          },
          {
            element: <CaseDetails />,
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
