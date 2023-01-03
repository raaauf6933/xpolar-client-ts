import classNames from 'classnames';
import * as React from 'react';
import { ReactSVG } from 'react-svg';
import close_icon from '@assets/icons/close_icon.svg';

interface DrawerProps {
  open: boolean;
  onClose: React.ReactEventHandler<object>;
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}
classNames;
const Drawer = (props: DrawerProps): JSX.Element => {
  const { onClose, title, children, actions } = props;
  const handleOnClose = (event: React.MouseEvent<HTMLElement>) => {
    onClose(event);
  };
  return (
    <>
      <div
        className={classNames(
          'fixed inset-0 z-30  translate-x-full bg-gray-900 bg-opacity-[0.5]',
          {
            'transform-none': props.open,
          },
        )}
        onClick={handleOnClose}
      ></div>

      <div
        id="drawer-right-example"
        className={classNames(
          'fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white  transition-transform dark:bg-gray-800 ',
          {
            'transform-none': props.open,
          },
        )}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <div className="flex h-full flex-col">
          <div className="h-full grow-[1]">
            <div className="flex w-full items-center justify-between p-3">
              {title && <span>{title}</span>}
              <button
                type="button"
                data-drawer-dismiss="drawer-right-example"
                aria-controls="drawer-right-example"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleOnClose}
              >
                <ReactSVG src={close_icon} />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <hr className="w-full divide-y divide-gray-200 dark:divide-gray-700" />
            <div className="p-3">{children}</div>
          </div>
          {actions && (
            <>
              {' '}
              <hr className="w-full divide-y divide-gray-200 dark:divide-gray-700" />
              <div className="p-3">{actions}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
