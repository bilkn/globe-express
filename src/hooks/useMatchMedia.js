import { useCallback, useEffect, useState } from 'react';

function useMatchMedia(query) {
  const [isMatched, setIsMatched] = useState(false);

  const matchMedia = useCallback((query) => {
    const mql = window.matchMedia(query);
    return mql.matches;
  }, []);

  useEffect(() => {
    if (matchMedia(query)) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, [query, matchMedia]);

  useEffect(() => {
    const handleResize = () => {
      const mql = matchMedia(query);
      if (mql) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [matchMedia, query]);

  return { isMatched };
}

export default useMatchMedia;
