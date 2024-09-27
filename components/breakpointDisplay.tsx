"use client"
import React, { useEffect, useState } from 'react';

const BreakpointDisplay = () => {
    if(window == undefined) return null;
  const [width, setWidth] = useState(window?.innerWidth ?? 0);
  
  const getBreakpoint = (width: number) => {
    if (width < 640) return 'xs';
    if (width >= 640 && width < 768) return 'sm';
    if (width >= 768 && width < 1024) return 'md';
    if (width >= 1024 && width < 1280) return 'lg';
    if (width >= 1280 && width < 1536) return 'xl';
    return '2xl';
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const breakpoint = getBreakpoint(width);

  // Only show the component in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 px-2 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white border border-gray-300 dark:border-white shadow-md rounded-full z-50 font-mono transition-all duration-150">
      {breakpoint}
    </div>
  );
};

export default BreakpointDisplay;
