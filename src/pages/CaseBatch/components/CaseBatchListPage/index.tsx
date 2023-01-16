import PageHeader from '@/components/PageHeader';
import * as React from 'react';
import CaseBatchList from '../CaseBatchList';
import FilterBar from '@/components/FilterBar';
import Card from '@/components/Card';
import { Tab } from '@/components/Tabs';
import Button from '@/components/Button';
import { ListProps } from '@/types';
import { CaseBatch } from 'types/graphql';

interface CaseBatchListPageProps extends ListProps {
  tabs: Tab[];
  onImportCaseBatch: () => void;
  caseBatches: (CaseBatch | null)[] | null | undefined;
}

const CaseBatchListPage: React.FC<CaseBatchListPageProps> = (props) => {
  const { tabs, onImportCaseBatch } = props;
  return (
    <>
      <PageHeader
        action={
          <>
            <Button color="primary" onClick={onImportCaseBatch}>
              Import New Batch
            </Button>
          </>
        }
      />
      <Card>
        <FilterBar tabs={tabs} searchPlaceholder="Search Reference No.." />
        <CaseBatchList {...props} />
      </Card>
    </>
  );
};

export default CaseBatchListPage;
