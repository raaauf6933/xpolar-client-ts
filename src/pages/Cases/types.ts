export type CaseSection = 'case' | 'payment' | 'addresses' | 'debtAttributes';

export type CasesQueryParams = {
  batchNumber: string;
  firstName: string;
  lastName: string;
  status: string;
  clientReference: string;
  department: string;
  birthDate: string;
  debtorId: string;
};
