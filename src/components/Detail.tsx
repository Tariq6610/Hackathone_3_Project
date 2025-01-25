"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './Product'
import Link from 'next/link'
import Image from 'next/image'
import { useCartContext } from './context/CartContext'
import { Product } from "@/types/Product";
import { client } from "@/sanity/lib/client";
import ProductCardSkeleton from "./skeletons/ProductSkeleton";
import SkeletonDetailProductPage from "./skeletons/DetailsProductSkeleton";
import Colors from "./details/Colors";
import SizeBtn from './SizeBtn'



const Detail = ({id} : {id : string}) => {
  const [product, setProduct] = useState<Product | null>(null)
  

  const [amount, setAmount] = useState(1)
  const [StateColor, setStateColor] = useState("Blue")
  const [size, setSize] = useState("Medium")
  const {setCart, cart} = useCartContext()
  const [allProducts, setAllProducts] = useState<Product[] | null>(null)



  useEffect(() => {
    if(id){
    async function fetchProducts() {
      try {
        const product = await client.fetch(`
          *[_type == "products" && _id == "${id}"][0]{
            name,
            category,
            description,
            price,
            _id,
            stars,
            rating,
            discountPercent,
            isNew,
            colors,
            sizes,
            "image": image.asset->url
          }
        `);

        const allProducts = await client.fetch(`
          *[_type == "products" ]{
            name,
            category,
            description,
            price,
            _id,
            stars,
            rating,
            discountPercent,
            isNew,
            sizes,
            colors,
            "image": image.asset->url
          }
        `);

          
        // Check if the fetched data is valid
        if (!allProducts || allProducts.length === 0 || !product) {
          throw new Error("No products were fetched from Sanity.");
        }

        setAllProducts(allProducts)
        setProduct(product);
        console.log(product)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
  
    fetchProducts();
  }
  }, [id]);

//when someone visit details page first color and first size will be selected through this function
useEffect(()=>{
  if(product){
    setStateColor(product.colors[0])
    setSize(product.sizes[0])
  }
},[product])

  // const cardId = id; 
  // if(allProducts){
  //   const productClicked = allProducts.find((product) => (product._id === cardId))!;
  //   console.log(productClicked)
  // } 
    // to replace or update the existing product in the cart  
    const filteredProduct = cart.filter((product) => product._id !== id)

  function increment(){
    setAmount((prev) => (
      prev + 1
    ))
  }

  function decrement(){
    setAmount((prev) => (
      prev > 1 ? prev - 1 : prev
    ))
  }

  function AddToCart(){
    if(product){
    setCart(()=>(
      [
        ...filteredProduct,
        {...product, amount: amount, color: StateColor, size: size}
      ]
    ))
  }
  }
  let netCost = 0
 if(product){
   netCost = product.price - (product.price * product.discountPercent/100)
 }


  // const SIZES = ["Small", "Medium", "Large", "X-Large"]
  return (
    <div className='max-w-[1440px] mx-auto 2xl:px-[100px] xl:px-[50px] px-[16px]'>

    <div>
        <ul className='flex '>
            <li className='flex gap-[4px] '>Home <img className='object-contain' src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] '>Shop <img className='object-contain' src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] '>Men <img className='object-contain' src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] '>T-shirta </li>
        </ul>
    </div>
    <div>
      {!product ? 
      <SkeletonDetailProductPage />
      :
        <div className='min-h-[530px] flex flex-col items-center mt-4 xl:mt-0 xl:flex xl:flex-row gap-[14px]'>
            <div className='flex flex-col-reverse items-center xl:flex xl:flex-row gap-[14px]'>
              <div className='flex xl:flex-col gap-[10px] '>
                  <div className='md:w-[152px] md:h-[167px] w-[120px] h-[140px] rounded-[20px]'><Image width={152} height={167} className='w-[152px] h-[167px] object-cover' src={product.image} alt="" /></div>
                  <div className='md:w-[152px] md:h-[167px] w-[120px] h-[140px] rounded-[20px]'><Image width={152} height={167} className='w-[152px] h-[167px] object-cover' src={product.image} alt="" /></div>
                  <div className='md:w-[152px] md:h-[167px] md:block hidden rounded-[20px]'><Image width={152} height={167} className='w-[152px] h-[167px] object-cover' src={product.image} alt="" /></div>
              </div>
              <div className='md:w-[444px] md:h-[524px] rounded-[20px]'>
              <img className='h-full w-full object-cover' src={product.image} alt="" />
              </div>
            </div>
        <div className=' flex-1 h-full mt-6 md:mt-0'>
          <div className='max-w-[90%]'>
            <h1 className='break-words font-extrabold xl:text-[40px] lg:text-[30px] text-[24px] tracking-tight'>{product.name}</h1>

          </div>
            <div className='flex flex-col gap-[8px]'>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <img className='object-contain' src={product.stars> 0 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={product.stars> 1 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={product.stars> 2 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={product.stars> 3 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={product.stars> 4 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <span className='text-gray-500 text-sm'>{product.rating}/5</span>
            </div>
            <div className='flex gap-[12px] items-center'><span className='text-[24px] font-bold'>{netCost}</span>
            {product.discountPercent !== 0 && <span><span className='text-gray-400 text-[24px] font-bold line-through mr-[10px]'>{product.price}</span> 
            <span className="text-sm text-red-600">{product.discountPercent}</span></span>
           }
            </div>
            <p>{product.description}</p>
            <p>Select Colors</p>
            <div className='flex gap-[16px]'>
                 {
                  product.colors.map((color, ind) => (
                    <Colors key={ind} setStateColor={setStateColor} StateColor={StateColor}  color={color} />
                  ))
                 }
            </div>
            <hr className='my-[14px]'/>
            <p>Choose Size</p>
            <div className='flex gap-[5px] md:gap-[12px]'>
              {product.sizes.map((SIZE, ind) => (
                <SizeBtn key={ind} SIZE={SIZE} setSize={setSize} size={size}/>
              ))}
            </div>
            <hr className='my-[14px]'/>
            <div className='flex gap-[16px]'>
                <div className='w-[170px]  font-bold flex justify-between px-4 items-center h-[52px] rounded-[62px] bg-[#F0F0F0]'>
                    <button onClick={decrement} className='text-[30px]'>-</button>
                    <button  className='text-[20px]'>{amount}</button>
                    <button onClick={increment} className='text-[30px]'>+</button>
                </div>
                <Link href='/cart'><div onClick={AddToCart} className='xl:w-[400px] lg:w-[200px] w-[150px] h-[52px] flex justify-center items-center rounded-full bg-black text-white'>Add to Cart</div></Link>
            </div>
        </div>
        </div>
        </div> }
    </div>
    <div className='flex justify-around mb-[56px] mt-[80px]'>
        <div>Product Details</div>
        <div className=' border-b-2 border-black'>Rating And Reviews</div>
        <div>FAQs</div>
      </div>
    <div className='flex gap-[20px] mb-[20px] xl:overflow-hidden overflow-x-scroll overflow-y-hidden'>
    <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Samantha D.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;
            </p>
          </div>
        </div>        
        <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Alex M.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;
            </p>
          </div>
        </div>
    </div>
    <div className='flex gap-[20px] mb-[20px] xl:overflow-hidden overflow-x-scroll overflow-y-hidden'>
    <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Ethan R.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;
            </p>
          </div>
        </div>        
        <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Olivia P.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;
            </p>
          </div>
        </div>
    </div>
    <div className='flex gap-[20px] mb-[20px] xl:overflow-hidden overflow-x-scroll overflow-y-hidden'>
    <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Liam K.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I&apos;m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>
        </div>        
        <div className="w-[572px] flex-shrink-0 border flex flex-col gap-[15px] min-h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Ava H..</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;
            </p>
          </div>
        </div>
    </div>
      <div className='flex justify-center'><button className='w-[230px] h-[52px] flex justify-center items-center border'>Load More Reviews</button></div>
      <>
    <div className=' max-w-[1440px] 2xl:px-[100px] flex flex-col items-center gap-[55px] xl:px-[50px] px-[16px] mt-[72px]'>
        <h1 className='font-bold xl:text-[48px] lg:text-[38px] text-[28px] tracking-tight'> YOU MIGHT ALSO LIKE</h1>
        <div className='flex gap-[20px] w-full overflow-x-scroll'>
              {
            allProducts &&
            allProducts.length > 0 ? 
            allProducts.slice(8).map((product) => (
              <ProductCard key={product._id} sizes={product.sizes} colors={product.colors} name={product.name} category={product.category} isNew={product.isNew} description={product.description} discountPercent={product.discountPercent} price={product.price} stars={product.stars} rating={product.rating} image={product.image} _id={product._id}/>
          ))
            :
            Array(4).fill(0).map((_, ind)=>(
              <ProductCardSkeleton key={ind}/>
            ))
              }


            {}
        </div>
    </div>
    </>
</div>
  )
}

export default Detail