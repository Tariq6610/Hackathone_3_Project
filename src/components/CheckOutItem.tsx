import { Cart } from '@/types/Cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CheckOutItem = ({product}:{product: Cart}) => {
    const netCost = product.price - (product.price * product.discountPercent/100)
  return (
    <>
    <div className="flex sm:flex-row gap-3 flex-col">
      <div className="sm:w-[80px] sm:h-[80px] overflow-hidden h-auto w-auto">
        <Link href={`product/${product._id}`}>
        <Image
          width={80}
          height={80}
          priority
          className="object-cover w-[80px] h-[80px] hover:scale-110 transition-transform duration-300"
          src={product.image}
          alt=""
        /></Link>
      </div>
      <div className="flex-1 flex flex-col justify-end  h-[80px]">
      <div className=''>
            <h1 className="font-bold text-[16px]">{product.name}</h1>
          <div>
            <p>{product.size} , {product.color}</p>
            <p>{product.amount}</p>
          </div>
          </div>
      </div>
      <div className="flex items-end ">
          <div className="flex justify-end items-center">
            <h1 className="font-bold text-[18px]">${netCost}</h1>
          </div>
      </div>
    </div>
    <hr/>
  </>
  )
}

export default CheckOutItem