import * as React from 'react';

interface CardProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  toolbar?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, children, actions, toolbar } = props;

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md ">
      {(title || toolbar) && (
        <div className="flex justify-between border-b border-gray-200 p-4 tracking-tight">
          <h5 className="  text-lg font-semibold  text-gray-900">{title}</h5>
          <div> {toolbar}</div>
        </div>
      )}
      <div className="p-5">{children}</div>
      {actions && (
        <div>
          <h5 className="border-t border-gray-200 p-4 text-lg font-semibold tracking-tight text-gray-900">
            {actions}
          </h5>
        </div>
      )}
    </div>
  );
};

export default Card;
