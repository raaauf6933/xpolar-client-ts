import * as React from 'react';
import Tabs, { Tab } from '../Tabs';
import SearchInput from '../SearchInput';
import Filter from '../Filter';

interface FilterBarProps {
  tabs: Tab[];
  searchPlaceholder?: string;
}
const FilterBar = (props: FilterBarProps): JSX.Element => {
  const { tabs, searchPlaceholder } = props;
  return (
    <>
      <div className="py-2">
        <Tabs tabs={tabs} />
        <div className="flex flex-row items-center pt-1">
          <Filter />
          <SearchInput searchPlaceholder={searchPlaceholder} />
        </div>
      </div>
    </>
  );
};

export default FilterBar;
