import Table from '@/components/Table';
import * as React from 'react';
import { columns } from '../../utils';

interface CaseListProps {
  data: Array<unknown>;
}

const CaseList: React.FC<CaseListProps> = (props) => {
  const { data } = props;

  return (
    <>
      <div className="border border-solid p-4">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default CaseList;
