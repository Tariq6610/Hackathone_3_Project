"use client"
import React from 'react'
import ProductCard from './Product'
import { UseproductsContext } from './context/ProductsContext'
import Link from 'next/link'
import ProductCardSkeleton from './skeletons/ProductSkeleton'

const NewArrivals = () => {
  const {allProducts} = UseproductsContext();
  const NewArrivals = allProducts.filter((product)=> product.isNew === true)
  return (
    <>
    <div id='NewArrivalSection' className=' max-w-[1440px] 2xl:px-[100px] mx-auto flex flex-col items-center gap-[55px] xl:px-[50px] px-[16px] mt-[72px]'>
        <h1 className='font-bold md:text-[48px] text-[28px] tracking-tight'>NEW ARRIVALS</h1>
        <div className='flex justify-between w-full overflow-x-scroll gap-[20px]'>
          {
            NewArrivals.length > 0 ? 
            NewArrivals.map((product) => (
                <ProductCard key={product._id} sizes={product.sizes} colors={product.colors} name={product.name} category={product.category} isNew={product.isNew} description={product.description} discountPercent={product.discountPercent} price={product.price} stars={product.stars} rating={product.rating} image={product.image} _id={product._id}/>
            ))
            :
            Array(4).fill(0).map((_, ind)=>(
              <ProductCardSkeleton key={ind}/>
            ))        
          }   
        </div>
    <div className='flex justify-center mt-[36px]'>
      <Link href='/category'><button className='w-[218px] border h-[52px]  flex justify-center items-center rounded-[62px]'> view All</button></Link>
    </div>
    </div>
    </>
  )
}

export default NewArrivals