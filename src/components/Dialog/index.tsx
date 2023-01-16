import classNames from 'classnames';
import React from 'react';

export interface DialogProps {
  children?: React.ReactNode;
  open: boolean;
  title?: string;
  actions?: React.ReactNode;
  onClose: () => void;
}

const Dialog = (props: DialogProps): JSX.Element => {
  const { open, children, title, actions, onClose } = props;

  const handleOnClose = () => {
    onClose();
  };

  return (
    <>
      <div>
        <div
          className={classNames(
            'fixed inset-0 z-40 translate-x-full bg-gray-900 bg-opacity-[0.5] ',
            {
              'transform-none': open,
            },
          )}
          onClick={handleOnClose}
        ></div>

        <div
          id="defaultModal"
          aria-hidden="true"
          className={classNames(
            'h-modal fixed top-0 left-0 right-0 z-50  w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full',
            {
              flex: props.open,
              hidden: !props.open,
            },
          )}
        >
          <div className="relative h-full w-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={handleOnClose}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="space-y-6 p-6">{children}</div>

              {actions && (
                <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
                  {actions}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
