import React from 'react';

export type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowSize | null>(null);

  const handleResize = React.useCallback(() => {
    setWindowSize((prevValues) => ({
      ...prevValues,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }, [setWindowSize]);

  React.useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { width: windowSize?.width, height: windowSize?.height };
}
