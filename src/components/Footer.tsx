import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full relative pt-[100px] flex items-end pb-[40px] justify-center bg-[#F0F0F0] min-h-[500px] mt-[170px]'>
        <div className=' max-w-[1440px] flex flex-col 2xl:px-[100px] xl:px-[50px] px-[16px]'>
        <div className='absolute flex-wrap top-[-80px] left-1/2 -translate-x-1/2 w-[93%] max-w-[1150px] min-h-[180px] text-white rounded-[20px] bg-black flex items-center justify-center lg:justify-between py-[36px] gap-y-4 px-[16px] xl:px-[64px]'>
            <div className='md:w-1/2 w-full'>
                <h1 className='font-bold md:text-[48px] text-[28px] leading-[34px] md:leading-[46px] tracking-tight'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className='flex flex-col gap-[14px] w-full md:w-fit'>
                <input className='px-[20px] h-[48px] md:w-[349px] w-full rounded-[62px] outline-none border-none' placeholder='Enter Your email address' type="text" name="" id="" />
                <button className='h-[48px] md:w-[349px] rounded-[62px] border-none bg-white text-black'>Subscribe to Newsletter</button>
            </div>
        </div>
        <div className='flex gap-[113.5px] mb-6 flex-wrap mt-[150px] md:mt-[200px] lg:mt-[80px] xl:mt-[50px]'>
            <div className='flex flex-col gap-[25px] w-[248px]'>
            <h1 className='text-[32px] font-extrabold tracking-tight'>SHOP.CO</h1>
            <p className='font-normal text-[14px]'>We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
            <div className='flex gap-[10px]'>
                <img src="/home/twitter.png" alt="" />
                <img src="/home/fb.png" alt="" />
                <img src="/home/insta.png" alt="" />
                <img src="/home/github.png" alt="" />
            </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-medium text-[16px] tracking-[3px]'>COMPANY</h1>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Features</p>
                <p className='text-gray-600'>Works</p>
                <p className='text-gray-600'>Career</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-medium text-[16px] tracking-[3px]'>HELP</h1>
                <p className='text-gray-600'>Customer Support</p>
                <p className='text-gray-600'>Delivery Details</p>
                <p className='text-gray-600'>Terms And Conditions</p>
                <p className='text-gray-600'>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-medium text-[16px] tracking-[3px]'>FAQ</h1>
                <p className='text-gray-600'>Account</p>
                <p className='text-gray-600'>Manage Deliveries</p>
                <p className='text-gray-600'>Orders</p>
                <p className='text-gray-600'>Payments</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-medium text-[16px] tracking-[3px]'>RESOURCES</h1>
                <p className='text-gray-600'>Free ebooks</p>
                <p className='text-gray-600'>Development Tutorial</p>
                <p className='text-gray-600'>How to -Blog</p>
                <p className='text-gray-600'>Youtube Playlist</p>
            </div>
        </div>
    <hr className=' -rotate-1'/>
    <div className='flex flex-wrap justify-between items-center'>
    <p className='text-[14px] text-gray-600 mt-[25px]'>© 2000-2021, All rights reserved</p>
    <img src="/home/Frame 53.png" alt="" />
    </div>
    </div>
    </div>
  )
}

export default Footer