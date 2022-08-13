import { useCallback, useEffect, useRef } from 'react';
import random from '../helpers/random';

// Utility helper for random number generation

const useRandomInterval = (callback: () => void, minDelay: number, maxDelay: number) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    let isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number' && timeoutId.current;

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);

        timeoutId.current = setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }
    return () => {
        if (timeoutId.current) 
            window.clearTimeout(timeoutId.current);
    };
  }, [minDelay, maxDelay]);
  
  const cancel = useCallback(function () {
    if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
    }
  }, []);

  return cancel;
};

export default useRandomInterval;