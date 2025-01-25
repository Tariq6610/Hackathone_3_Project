import React from 'react'

const ColorsSkeleton = () => {
  return (
    <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full border border-black bg-gray-300 animate-pulse">
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>
  );
}

export default ColorsSkeleton