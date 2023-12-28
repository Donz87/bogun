import { useLayoutEffect, useState } from "react";

type MediaQuery = '(max-width: 1024px)' | '(min-width: 1025px)';

interface MediaQueryResult {
    isMobile: boolean;
    isDesktop: boolean;
}

const queries: MediaQuery[] = [
    '(max-width: 1024px)',
    '(min-width: 1025px)',
]

export const useMatchMedia = (): MediaQueryResult => {
    const mediaQueryLists = queries.map((query) => matchMedia(query));

    const getValues = (): boolean[] => mediaQueryLists.map((mql) => mql.matches);

    const [values, setValues] = useState<boolean[]>(getValues);

    useLayoutEffect(() => {
        const handler = (): void => setValues(getValues);
    
        mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));
    
        return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    });
    return ['isMobile', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
      }), {} as MediaQueryResult);
};