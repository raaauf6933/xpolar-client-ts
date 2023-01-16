import * as React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import CaseList from '@/pages/Cases/views/CaseList';
import AppLayout from '@/components/AppLayout';
// import DashBoard from '@/pages/Dashboard';
import CaseDetails from '@/pages/Cases/views/CaseDetails';
import AuthClient from '@/auth';
import ClientList from '@/pages/Clients/views/ClientList';
import CrumbLink from '@/components/BreadCrumb/CrumbLink';
import CaseBatchList from '@/pages/CaseBatch/views/CaseBatchList';

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
        handle: {
          crumb: () => <CrumbLink to="/clients" label="Clients" />,
        },
        path: '/clients',
      },
      {
        element: <CaseBatchList />,
        handle: {
          crumb: () => <CrumbLink to="/case_batch" label="Case Batch" />,
        },
        path: '/case_batch',
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
