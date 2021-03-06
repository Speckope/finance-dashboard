// Returnig DOMRect object of passed element's ref
import * as React from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export const useSize = (target: React.RefObject<HTMLElement>) => {
  const [size, setSize] = React.useState<DOMRect>();

  React.useLayoutEffect(() => {
    setSize(target.current!.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};
