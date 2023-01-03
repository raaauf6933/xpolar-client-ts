import * as React from 'react';
import BreadCrumb from '../BreadCrumb';
import classNames from 'classnames';

interface PageHeaderProps {
  action?: React.ReactNode;
  title?: React.ReactNode | string;
}
const PageHeader = (props: PageHeaderProps): JSX.Element => {
  return (
    <>
      <div className=" flex items-center justify-between py-4">
        <div
          className={classNames('grow-[1]', {
            'mr-4': props.action,
          })}
        >
          <BreadCrumb />
        </div>

        {props.action && <div>{props.action}</div>}
      </div>
    </>
  );
};

export default PageHeader;
