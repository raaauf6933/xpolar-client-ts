import * as React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import CaseList from '@/pages/Cases/CaseList';
import AppLayout from '@/components/AppLayout';
// import DashBoard from '@/pages/Dashboard';
import CaseDetails from '@/pages/Cases/CaseDetails';
import AuthClient from '@/auth';
import ClientList from '@/pages/Clients/ClientList';
import CrumbLink from '@/components/BreadCrumb/CrumbLink';

export const router = createBrowserRouter([
  {
    children: [
      // {
      //   element: <DashBoard />,
      //   path: '/',
      // },
      {
        children: [
          {
            element: <CaseList />,
            index: true,
          },
          {
            element: <CaseDetails />,
            handle: { crumb: () => <CrumbLink label="Case Details" /> },

            path: ':id',
          },
          {
            element: <h1>create</h1>,
            path: 'create',
          },
        ],

        handle: {
          crumb: () => <CrumbLink to="/cases" label="Cases" />,
        },
        path: '/cases',
      },
      {
        children: [
          {
            element: <ClientList />,
            index: true,
          },
        ],
        path: '/clients',
      },
    ],
    element: <AppLayout />,
    errorElement: <Navigate to="/cases" />,
  },
  {
    element: <AuthClient />,
    path: '/login',
  },
]);
