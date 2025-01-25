import Link from 'next/link'
import React from 'react'

const Brawse = () => {
  return (
    <div id='brandsSection' className='max-w-[1440px] 2xl:px-[100px] mx-auto xl:px-[50px] px-[16px] '>
    <div className='bg-[#F0F0F0] flex flex-col items-center justify-center pb-[76px]'>
      <h1 className='font-bold md:text-[48px] text-[28px] text-center md:text-start tracking-tight mt-[70px] mb-[64px] leading-8'>BROWSE BY DRESS STYLE</h1>
      <div className='grid xl:grid-cols-3 grid-cols-4 gap-[20px] w-full '
      style={{ gridAutoRows: '289px' }}
      >
        <div className='bg-gray-300 overflow-hidden xl:col-span-1 col-span-4 lg:col-span-2 relative '>
        <Link href='/category'><img className='w-full h-full object-cover hover:scale-110  transition-all duration-500' src="/browse/image 11.png" alt="" /></Link>
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Casual</h1>
        </div>
        <div className='bg-gray-300 overflow-hidden relative  lg:col-span-2 col-span-4'>
        <Link href='/category'><img className='w-full h-full object-cover hover:scale-110  transition-all duration-500' src="/browse/image 13.png" alt="" /></Link>
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Formal</h1>
        </div>
        <div className='bg-gray-300 overflow-hidden lg:col-span-2 col-span-4 relative'>
        <Link href='/category'><img className='w-full h-full object-cover hover:scale-110  transition-all duration-500' src="/browse/image 12.png" alt="" /></Link>
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Party</h1>
        </div>
        <div className='bg-gray-300 overflow-hidden relative xl:col-span-1 lg:col-span-2 col-span-4'>
        <Link href='/category'><img className='w-full h-full object-cover hover:scale-110  transition-all duration-500' src="/browse/image 14.png" alt="" /></Link>
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Gym</h1>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Brawse