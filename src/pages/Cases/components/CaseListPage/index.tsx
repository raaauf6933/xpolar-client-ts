import Table from '@/components/Table';
import * as React from 'react';
import { columns } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { FakeCasesType } from '@/utils/fakeData';
import CaseSearchForm from '@/components/CaseSearchForm';
import BreadCrumb from '@/components/BreadCrumb';

interface CaseListPageProps {
  data: FakeCasesType[];
}

const CaseListPage: React.FC<CaseListPageProps> = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <BreadCrumb />
      <CaseSearchForm />
      <div className="mt-5 border border-solid p-4">
        <Table
          columns={columns}
          data={data}
          onRowClick={(row) => navigate(row.id)}
        />
      </div>
    </>
  );
};

export default CaseListPage;
