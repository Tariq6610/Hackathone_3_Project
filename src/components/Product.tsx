"use client"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link"
import { useCartContext } from "./context/CartContext"
import { useState } from "react";
import { toast } from 'sonner';
import { Product } from "@/types/Product";



const ProductCard = ({name, _id, discountPercent, image, price, rating, stars} : Product) => {  

    const {addToCart, removeProduct} = useCartContext();
    const [productAdded, setProductAdded] = useState(false)

    // const oldPrice = (price + (price * discountPercent/100)).toFixed(2)
    const netCost = price - (price * discountPercent/100)



    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id : string) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent the event from propagating to the Link
        console.log("Add to cart clicked"); // Your custom logic here
        setProductAdded(!productAdded)
        
        if(productAdded){
            removeProduct(id)
            toast.info('Product removed from the Cart')
        }else{
            addToCart(id)
            toast.success('Product added to Cart')                                                                                      
        }
      };

    return (
   <>
   <Link href={`/product/${_id}`}>
    <div className='md:w-[270px] w-[160px] h-[320px] md:h-[380px] group shadow-lg '>
        <div className='md:w-[270px] w-[160px] bg-slate-200 overflow-hidden aspect-square mb-[16px] relative md:h-[250px] h-[200px] flex justify-center items-center'>
            <Image className="object-cover md:w-[270px] w-[160px] md:h-[250px] h-[200px] hover:scale-110  transition-all duration-500"
            width={270}
            height={250}
            priority
            src={image} alt="product image" />
            {discountPercent ? 
            <div className='lg:w-[55px] lg:h-[26px] w-[36px] h-[16px]  rounded flex justify-center items-center bg-primary absolute top-[12px] text-xs lg:text-base left-[12px] text-white'>{discountPercent}</div>
            : ""
        }
            <div className='absolute top-[12px] right-[12px] w-[34px] h-[76px] flex flex-col justify-center items-center'>
                <img src="/Frame 575.png" alt=""  className=''/>
            </div>
          <div className="absolute bottom-0 w-full">
          <button onClick={(e) => {handleButtonClick(e, _id) ; }} className={`w-7 h-7  text-white flex justify-center items-center ${productAdded ? 'bg-red-500':'bg-black'}`}><FaShoppingCart /></button>
            </div>
        </div>
        <div className='flex justify-end flex-col gap-[8px]'>
            <p className="font-bold lg:text-[18px] text-[14px] md:leading-6 leading-5  line-clamp-1 xl:min-h-0 xl:h-fit ">{name}</p>
            <div className='w-[140px] h-[20px] items-center flex gap-[8px]'>
                <img className='object-contain md:size-4 size-3' src={stars > 0 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain md:size-4 size-3' src={stars > 1 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain md:size-4 size-3' src={stars > 2 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain md:size-4 size-3' src={stars > 3 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain md:size-4 size-3' src={stars > 4 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <span className='text-gray-500 text-sm'>{rating}/5</span>
            </div>
            <div className='flex gap-[12px] items-center'><span className='lg:text-[24px] text-base font-bold'>${netCost}</span>
            {discountPercent !== 0 && <span><span className='text-gray-400 lg:text-[24px] text-base  font-bold line-through mr-[10px]'>{price}</span> 
            <span className="text-sm text-red-600">{discountPercent}</span></span>
           }
            </div>
        </div>
    </div>
    </Link>
   </>
  )
}

export default ProductCard