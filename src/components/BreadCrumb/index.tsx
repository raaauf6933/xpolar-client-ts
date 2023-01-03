/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { Params, useMatches } from 'react-router-dom';

type RouteWithHandle<Handle extends string, Value> = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: Record<Handle, Value>;
};

function isRecordWithKey<T extends string>(
  value: unknown,
  key: T,
): value is Record<T, unknown> {
  return !!value && typeof value === 'object' && key in value;
}

function hasHandle<Handle extends string, Value>(
  handle: Handle,
  valuePredicate?: (v: unknown) => v is Value,
) {
  return (
    route:
      | {
          handle: unknown;
        }
      | RouteWithHandle<Handle, Value>,
  ): route is RouteWithHandle<Handle, Value> => {
    return (
      !!route.handle &&
      isRecordWithKey(route.handle, handle) &&
      (!valuePredicate ||
        (handle in route.handle && valuePredicate(route.handle[handle])))
    );
  };
}

function isObject(value: unknown): value is Function {
  return typeof value === 'function';
}

const BreadCrumb = () => {
  const matches = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter(hasHandle('crumb', isObject))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <nav
      className="flex rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumbs.map((crumb, index, array) => {
          if (index !== array.length - 1) {
            return (
              <>
                <li key={index} className="inline-flex items-center">
                  {crumb}
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </li>
              </>
            );
          } else {
            return (
              <li key={index} className="inline-flex items-center">
                {crumb}
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
