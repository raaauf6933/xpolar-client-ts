import * as React from 'react';

interface PageHeaderProps {
  action?: React.ReactNode;
  title: React.ReactNode | string;
}
const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { title } = props;
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div>
          <span className="text-2xl">{title}</span>
        </div>

        {props.action && <div>{props.action}</div>}
      </div>
    </>
  );
};

export default PageHeader;
