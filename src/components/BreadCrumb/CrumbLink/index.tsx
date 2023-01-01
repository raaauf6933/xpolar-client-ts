import * as React from 'react';
import { Link } from 'react-router-dom';

interface CrumbLinkProps {
  to?: string;
  label: string;
}

const CrumbLink = (props: CrumbLinkProps): JSX.Element => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className="inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        {/* <svg
          className="mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg> */}
        {props.label}
      </Link>
    );
  } else {
    return (
      <span className="inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        {/* <svg
          className="mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg> */}
        {props.label}
      </span>
    );
  }
};

export default CrumbLink;
