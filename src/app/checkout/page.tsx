'use client'
import CheckOutItem from '@/components/CheckOutItem'
import { useCartContext } from '@/components/context/CartContext'
import React from 'react'

const page = () => {
        const {cart, totalCostPrice, netPrice, discount} = useCartContext()
  return (
    <div className='max-w-[1440px] 2xl:px-[100px] flex flex-col gap-[24px] xl:px-[50px] px-[16px]'>
    <ul className='flex'>
        <li className='flex gap-[4px]'>Home <img className='object-contain' src="/home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px]'>Cart <img className='object-contain' src="/home/bracket.png" alt="" /></li>
    </ul>
    <div className='flex xl:flex-row flex-col'>
        <div className='xl:w-3/5 w-full flex flex-col  gap-[24px] py-[20px] px-[24px]'>
        <h1 className='font-bold text-[24px]'>Order Summary</h1>
        {cart && cart.map((product, ind) => (
            <CheckOutItem product={product} key={ind}/>
        ))}
        <div className='flex justify-end'>
        <p className='content-end font-bold text-[18px]'>
           Total : ${netPrice}
        </p>
        </div>
        </div>
        <div className='flex-1 flex flex-col gap-[24px] py-[20px] px-[24px]'>
            <h1 className='font-bold text-[24px]'>Order Summary</h1>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p className='font-bold text-[20px]'>${totalCostPrice}</p>
            </div>
            <div className='flex justify-between'>
                <p>Discount (-20%)</p>
                <p className='font-bold text-[20px]'>-${discount}</p>
            </div>
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p className='font-bold text-[20px]'>$15</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p className='font-bold text-[20px]'>${netPrice}</p>
            </div>
            <div className='flex flex-wrap gap-y-2 justify-between'>
                <input type="text" placeholder='Add Promo Code' name="" id="" />
                <button className='w-[119px] h-[48px] rounded-[62px] flex justify-center items-center text-white bg-black'>Apply</button>
            </div>
            <button className='md:w-[457px] w-full h-[60px] bg-black flex justify-center items-center text-white rounded-[30px] sm:rounded-[62px]'>Go to Checkout</button>
        </div>
    </div>
</div>
  )
}

export default page