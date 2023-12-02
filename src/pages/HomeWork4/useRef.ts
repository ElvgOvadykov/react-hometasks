import React from 'react';

export const useRef = <T>(initialValue?: T | null) => {
  return React.useMemo(() => {
    function F(value: T) {
      F.current = value;
    }

    F.current = initialValue;
    return F;
  }, []);
};
