import * as React from 'react';
import { Tab } from '@/components/Tabs';
import useSection from '@/hooks/useSection';
import { ColumnType } from '@/types';
import { CaseSection } from './types';
import { Case } from 'types/graphql';
import { currencyFormat } from '@/utils/currencyFormatter';
import Badge from '@/components/Badge';

export const columns: ColumnType[] = [
  {
    label: 'Client ID',
    path: 'client_id',
  },
  {
    label: 'Reference Number',
    path: 'reference_number',
  },
  {
    label: 'Debtor Name',
    path: 'debtor_name',
  },
  {
    label: 'Client Reference',
    path: 'client_reference',
  },
  {
    label: 'DPD',
    path: 'dpd',
  },
  {
    label: 'Original Capital',
    path: 'original_capital',
  },
  {
    label: 'Status',
    path: 'status',
  },
];

export const parseCasesData = (data: (Case | null)[] | null | undefined) => {
  return data?.map((e) => ({
    client_id: e?.caseBatch?.client?.code,
    client_reference: e?.clientReference,
    debtor_name: `${e?.person?.firstName} ${e?.person?.lastName}`,
    dpd: 60,
    id: e?.id,
    original_capital: currencyFormat(21000),
    reference_number: '20100121',
    status: <Badge color="success" label="Active" />,
  }));
};

export const createCaseSectionTabs = <T extends CaseSection>(
  defaultSection?: T,
): { tabs: Tab[]; state: CaseSection | null } => {
  const [setSection, sectionState] = useSection<CaseSection>(defaultSection);

  return {
    state: sectionState,
    tabs: [
      {
        action: () => setSection('case'),
        active: sectionState === 'case',
        label: 'Case',
      },
      {
        action: () => setSection('payment'),
        active: sectionState === 'payment',
        label: 'Payments',
      },
      {
        action: () => setSection('addresses'),
        active: sectionState === 'addresses',
        label: 'Addresses',
      },
      {
        action: () => setSection('debtAttributes'),
        active: sectionState === 'debtAttributes',
        label: 'Debt Attributes',
      },
    ],
  };
};
