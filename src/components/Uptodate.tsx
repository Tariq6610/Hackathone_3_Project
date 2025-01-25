import React from 'react'

const Uptodate = () => {
  return (
    <div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[16px]'>
        <div className='h-[180px] text-white bg-black flex items-center justify-between py-[36px] px-[64px]'>
            <div className='w-1/2'>
                <h1 className='font-bold text-[40px] leading-[45px] tracking-tight'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className='flex flex-col gap-[14px] ]'>
                <input className='px-[20px] h-[48px] w-[349px] rounded-[62px] outline-none border-none' placeholder='Enter Your email address' type="text" name="" id="" />
                <button className='h-[48px] w-[349px] rounded-[62px] border-none bg-white text-black'>Subscribe to Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default Uptodate