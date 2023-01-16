import classNames from 'classnames';
import React from 'react';

export interface Tab {
  action: () => void;
  label: string;
  active: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = (props: TabsProps): JSX.Element => {
  const { tabs } = props;
  return (
    <ul className="mb-2 flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      {tabs.map((e, index) => (
        <li key={index} className="mr-2">
          <button
            onClick={e.action}
            className={classNames('inline-block rounded-t-lg p-4  ', {
              ' bg-gray-100 text-blue-600 hover:bg-gray-100': e.active,
              ' hover:bg-gray-50 hover:text-gray-600 ': !e.active,
            })}
          >
            {e.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
