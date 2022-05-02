import React, { useEffect, useRef } from "react";

export const useEffectDidUpdate = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    effect();

    // const cleanupFunc = effect();
    // return cleanupFunc;
  }, deps);
};

export default useEffectDidUpdate;
