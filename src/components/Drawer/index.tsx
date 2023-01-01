import classNames from 'classnames';
import * as React from 'react';
import { ReactSVG } from 'react-svg';
import close_icon from '@assets/icons/close_icon.svg';

interface DrawerProps {
  open: boolean;
  onClose: React.ReactEventHandler<object>;
}
classNames;
const Drawer = (props: DrawerProps): JSX.Element => {
  const { onClose } = props;
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
          'fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800',
          {
            'transform-none': props.open,
          },
        )}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        {/* <h5
          id="drawer-right-label"
          className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Right drawer
        </h5> */}
        <button
          type="button"
          data-drawer-dismiss="drawer-right-example"
          aria-controls="drawer-right-example"
          className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleOnClose}
        >
          <ReactSVG src={close_icon} />
          <span className="sr-only">Close menu</span>
        </button>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{' '}
          <a
            href="#"
            className="text-blue-600 underline hover:no-underline dark:text-blue-500"
          >
            limited-time sale
          </a>{' '}
          for Flowbite Docs + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get access{' '}
          </a>
        </div>
      </div>
    </>
  );
};

export default Drawer;
