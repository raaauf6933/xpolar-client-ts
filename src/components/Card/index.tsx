import * as React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, children, actions } = props;

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md ">
      {title && (
        <div>
          <h5 className="mb-2 border-b border-gray-200 p-4 text-lg font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
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
