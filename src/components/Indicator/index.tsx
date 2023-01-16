import classNames from 'classnames';
import * as React from 'react';

interface IndicatorProps {
  state: 'loading' | 'success' | 'failed';
  label?: {
    loading?: string;
    success?: string;
    failed?: string;
  };
}

const Indicator: React.FC<IndicatorProps> = (props) => {
  const { state, label } = props;

  return (
    <div
      className={classNames(
        `rounded-full
         px-3 py-2 text-center text-xs 
         font-medium leading-none  
        `,
        {
          'animate-pulse  bg-blue-200 text-blue-800': state === 'loading',
          'bg-green-200 text-green-800 ': state === 'success',
          'bg-red-200 text-red-800 ': state === 'failed',
        },
      )}
    >
      {state === 'loading' ? (
        label?.loading ? (
          label?.loading
        ) : (
          <>loading...</>
        )
      ) : state === 'success' ? (
        label?.success ? (
          label?.success
        ) : (
          <>success</>
        )
      ) : state === 'failed' ? (
        label?.failed ? (
          label?.failed
        ) : (
          <>failed</>
        )
      ) : null}
    </div>
  );
};

export default Indicator;
