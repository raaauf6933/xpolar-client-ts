import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useSection = <T extends string>(
  defaultSection?: T,
): [(section: T) => void, T | null] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setDefaultSection = () => {
    !searchParams.get('section') &&
      searchParams.set('section', defaultSection || '');
    setSearchParams(searchParams);
  };
  React.useEffect(() => {
    setDefaultSection();
  }, [defaultSection]);

  const setSection = (section: T) => {
    searchParams.set('section', section);
    setSearchParams(searchParams);
    return;
  };

  const sectionState = <T>searchParams.get('section');

  return [setSection, sectionState];
};

export default useSection;
