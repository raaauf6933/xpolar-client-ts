import { useSearchParams } from 'react-router-dom';

export type setFilterCallBack<TD> = (data: TD) => TD;

const useFilter = <T extends object>(): [
  (cb: setFilterCallBack<T>) => void,
  T,
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

  const params = [];
  for (const entry of searchParams.entries()) {
    params.push(entry);
  }
  let queryParams = <T>{};

  if (params.length > 0) {
    params.forEach((e) => {
      queryParams = {
        ...queryParams,
        [e[0]]: e[1],
      };
    });
  }

  return [setFilter, queryParams];
};

export default useFilter;
