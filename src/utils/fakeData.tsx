import Badge from '@/components/Badge';
import React from 'react';
import { currencyFormat } from './currencyFormatter';

interface FakeCasesType {
  client_id: string;
  reference_number: string;
  debtor_name: string;
  client_reference: string;
  dpd: number;
  original_capital: string;
  status: React.ReactNode;
}

export const getFakeCases = (): FakeCasesType[] => {
  return [
    {
      client_id: '201',
      client_reference: '110790',
      debtor_name: 'James Dean',
      dpd: 60,
      original_capital: currencyFormat(21000),
      reference_number: '20100121',
      status: <Badge color="success" label="Active" />,
    },
    {
      client_id: '202',
      client_reference: '110791',
      debtor_name: 'Aida Bugg',
      dpd: 60,
      original_capital: currencyFormat(52000),
      reference_number: '20100122',
      status: <Badge color="success" label="Active" />,
    },
    {
      client_id: '203',
      client_reference: '110792',
      debtor_name: 'Kevin Hy',
      dpd: 30,
      original_capital: currencyFormat(55212.53),
      reference_number: '20100123',
      status: <Badge color="error" label="Collection Finished" />,
    },
    {
      client_id: '204',
      client_reference: '110789',
      debtor_name: 'Joseph Santos',
      dpd: 90,
      original_capital: currencyFormat(72212.21),
      reference_number: '20100124',
      status: <Badge color="error" label="Collection Finished" />,
    },
    {
      client_id: '205',
      client_reference: '110783',
      debtor_name: 'Frank Dela Cruz',
      dpd: 120,
      original_capital: currencyFormat(22000),
      reference_number: '20100125',
      status: <Badge color="success" label="Active" />,
    },
  ];
};
