import React from 'react';

const Loader = () => {
  return (
    <div className=" inset-0 flex items-center justify-center bg-opacity-90">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        {/* Middle Ring */}
        <div className="absolute inset-1 border-4 border-red-500 border-t-transparent rounded-full animate-spin-slow"></div>
        {/* Inner Ring */}
        <div className="absolute inset-2 border-4 border-red-400 border-t-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Loader;
    