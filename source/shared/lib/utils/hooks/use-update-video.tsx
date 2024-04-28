'use client';
import { useCallback, useEffect, useState } from 'react';

export function useUpdateVideo() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  const [_, setHeight] = useState(0);
  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      const height = node.getBoundingClientRect().height;
      if (height) {
        setHeight(height);
      }
    }
  }, []);

  return { state, ref: measuredRef };
}
