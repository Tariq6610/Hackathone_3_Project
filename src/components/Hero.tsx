import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=' flex bg-[#F2F0F1] flex-wrap mx-auto gap-y-[30px] justify-center xl:justify-between items-center min-h-[663px] max-w-[1440px] -z-20 '>
        <div className='w-[600px] 2xl:px-[100px] xl:px-[50px] px-[16px] flex flex-col justify-center gap-[20px] '>
         <h1 className='font-extrabold tracking-tight xl:text-[50px] md:text-[42px] text-[28px] leading-[34px] md:leading-[46px] xl:mt-0 mt-8'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
         <p className='leading-[16px] text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Link href='/category'><button className='h-[52px] rounded-[62px] md:w-1/2 w-full xl:w-[180px] bg-black text-white'>Shop Now</button></Link>
        </div>
        <div className='md:hidden px-[16px] h-[52px] mt-[20px] gap-x-[30px] flex justify-center items-center w-full'>
          <div  className='flex flex-col '>
              <p className='font-bold text-[24px]'>200+</p>
              <p>International Brands</p>
          </div>
          <div className='flex flex-col '>
          <p className='font-bold text-[24px]'>2,000+</p>
          <p>High-Quality Products</p>
          </div>
        </div>
        <div className='md:hidden h-[52px] mt-[20px] gap-x-[30px] flex justify-center items-center w-full'>
        <div  className='flex flex-col '>
              <p className='font-bold text-[24px]'>200+</p>
              <p>International Brands</p>
          </div>
        </div>
        <div className='relative h-full overflow-hidden w-[600px]'>
        <Image width={600} height={663} priority  className='object-cover h-[663px] w-full object-top' src="/hero/hero.jpeg" alt="" />
        <img className='absolute md:top-[331px] left-[20px] top-[150px] md:left-[50px]' src="/home/star.png" alt="" />
        <img className='absolute md:w-[104px] object-contain w-[80px] h-[104px] md:top-[80px] md:right-[60px] top-[20px] right-[15px]' src="/home/star.png" alt="" />
        </div>
    </div>
    <div className='max-w-[1440px] mx-auto w-full py-5 min-h-[122px] items-center bg-black flex flex-wrap 2xl:px-[100px] xl:px-[50px] px-[30px] justify-center 2xl:gap-x-[106px] xl:gap-x-[80px] lg:gap-[60px] md:gap-[40px] gap-[30px] gap-y-[30px]'>
        <img className='w-[116px] object-contain' src="/hero/versache.png" alt="" />
        <img className='w-[116px] object-contain' src="/hero/zara.png" alt="" />
        <img className='w-[116px] object-contain' src="/hero/gucci.png" alt="" />
        <img className='w-[116px] object-contain' src="/hero/prada.png" alt="" />
        <img className='w-[116px] object-contain' src="/hero/calvin.png" alt="" />
    </div>
    </>
  )
}

export default Hero