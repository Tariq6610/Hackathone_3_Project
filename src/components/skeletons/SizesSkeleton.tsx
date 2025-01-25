import React from 'react'

const SizesSkeleton = () => {
  return (
    <div className="py-[10px] px-[20px] rounded-lg flex justify-center items-center bg-gray-300 animate-pulse">
      <div className="w-10 h-4 bg-gray-400 rounded"></div>
    </div>
  );
}

export default SizesSkeleton