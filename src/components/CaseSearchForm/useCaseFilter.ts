/* eslint-disable prettier/prettier */
import { useSearchParams } from 'react-router-dom';

export type setFilterCallBack<TD> = (data: TD) => TD;

const useCaseFilter = <T extends object>(): [
  (cb: setFilterCallBack<T>) => void,
  T,
  () => void,
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilter = (cb: setFilterCallBack<T>): void => {
    const params = [];
    for (const entry of searchParams.entries()) {
      params.push(entry);
    }

    let queryParams = <T>{};

    params.length > 0 &&
      params.forEach((e) => {
        queryParams = {
          ...queryParams,
          [e[0]]: e[1],
        };
      });

    const props = cb(queryParams);

    Object.entries(props).forEach((obj) => {
      searchParams.set(obj[0], obj[1]);
      setSearchParams(searchParams);
    });
  };

  const resetFilter = () => {
    const params: string[] = [];
    searchParams.forEach((_value, key) => {
      if (key !== 'page' && key !== 'limit') {
        params.push(key);
      }
    });

    params.forEach((e) => {
      searchParams.delete(e);
      setSearchParams(searchParams);
    });
  };

  let queryParams = <T>{};

  for (const entry of searchParams.entries()) {
    queryParams = {
      ...queryParams,
      [entry[0]]: entry[1],
    };
  }

  return [setFilter, queryParams, resetFilter];
};

export default useCaseFilter;
