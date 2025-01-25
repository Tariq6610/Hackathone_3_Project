import React from 'react'
import { useCartContext} from './context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import {Cart} from "@/types/Cart"

interface Props{
  product :  Cart
}

const CartItem = ({product}: Props) => {
  const {removeProduct, incrementAmount, decrementAmount} = useCartContext()
  return (
    <>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-[124px] sm:h-[124px] overflow-hidden h-auto w-auto">
          <Link href={`product/${product._id}`}>
          <Image
            width={124}
            height={124}
            priority
            className="object-cover w-[124px] h-[124px] hover:scale-110 transition-transform duration-300"
            src={product.image}
            alt=""
          /></Link>
        </div>
        <div className="flex-1 flex flex-col justify-between h-[124px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[20px]">{product.name}</h1>
            <img className='cursor-pointer hover:scale-125 transition-transform duration-200' onClick={()=> removeProduct(product._id)} src="/home/delete.png" alt="" />
          </div>
          <div>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[24px]">${product.price}</h1>
            <div className="flex py-[12px] px-[20px] gap-[20px]">
              <button onClick={() => decrementAmount(product._id)} className='w-6 h-6 rounded-lg border border-gray-500 flex justify-center items-center cursor-pointer  transition-transform duration-100 active:scale-90 text-xl'><span className='w-full h-full flex justify-center items-center'>-</span></button>
              <p>{product.amount}</p>
              <button onClick={() => incrementAmount(product._id)} className='w-6 h-6 rounded-lg border border-gray-500 flex justify-center items-center cursor-pointer  transition-transform duration-100 active:scale-90 text-xl'><span className='w-full h-full flex justify-center items-center'>+</span></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem