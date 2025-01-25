import React from 'react'
interface ColorBtnProps {
  size : string
  SIZE : string
  setSize: (size: string) => void;
}

const SizeBtn = ({setSize, size, SIZE}: ColorBtnProps) => {
  return (
    <>
    <button onClick={() => setSize(SIZE)} className={`lg:py-[16px] flex justify-center items-center py-[4px] border lg:px-[32px] px-[16px] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-full 
      ${
        size === SIZE ?
        'bg-black text-white':
        'bg-white text-black'
      }
      `}
    >{SIZE}</button>
  </>
  )
}

export default SizeBtn