"use client"
import React, { useEffect, useState } from 'react'
// import { allProducts } from '@/components/items'
import ProductCard from '@/components/Product'
import Categories from '@/components/categories/Categories'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { UseproductsContext } from '@/components/context/ProductsContext'
import { Product } from '@/types/Product'
import { client } from '@/sanity/lib/client'
import CategorySize from '@/components/categories/CategorySize'
import CategoryColors from '@/components/categories/CategoryColors'
import ProductCardSkeleton from '@/components/skeletons/ProductSkeleton'
import CategoryType from '@/components/skeletons/CategoryType'
import ColorsSkeleton from '@/components/skeletons/ColorsSkeleton'
import SizesSkeleton from '@/components/skeletons/SizesSkeleton'

const Page = () => {
const {searchFilter} = UseproductsContext();
const [isOpen, setIsOpen] = useState(false);

const [allProducts, setAllProducts] = useState<Product[]>([])
const [allAvaibleTypes, setAllAvaibleTypes] = useState<string[]>([])
const [allAvaibleColors, setAllAvaibleColors] = useState<string[]>([])
const [allAvaibleSizes, setAllAvaibleSizes] = useState<string[]>([])
const [stateColor, setStateColor] = useState("")
const [stateSize, setStateSize] = useState("")
const [stateCategory, setStateCategory] = useState("")
const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
const [filters, setFilters] = useState({
  name: "",
  category : "",
  color : "",
  size : "",
})



//Filters Function
function filterProducts(){
  const filterBySearch = filters.name !== '' ? allProducts.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())) : allProducts
    const filterByCategory = filters.category !== '' ? filterBySearch.filter(product=> product.category === filters.category) : filterBySearch;
    const filterByColor = filters.color !== '' ? filterByCategory.filter(product => product.colors.includes(filters.color)) : filterByCategory;
    const filterBySize = filters.size !== '' ? filterByColor.filter(product => product.sizes.includes(filters.size)) : filterByColor;
    setFilteredProducts(filterBySize)
}


//Search Filter
function handleSearch(){
  // setFilteredProducts(filterBySearch)
}

  useEffect(() => {
    async function fetchProducts() {
      try{
      const allProducts: Product[] = await client.fetch(`
      *[_type == "products"]{
        name,
        category,
        description,
        price,
        _id,
       discountPercent,
       isNew,
       stars,
       rating,
       colors,
       sizes,
       "image": image.asset->url
      }
      `);

       // Check if the fetched data is valid
       if (!allProducts || allProducts.length === 0) {
         throw new Error("No products were fetched from Sanity.");
       }

      // Update state
      setAllProducts(allProducts);
      
          if(allProducts.length !== 0){
            function getCategories(){
              const allAvaibleTypes = Array.from( new Set(allProducts.map((product)=> product.category))) 
              const allAvaibleColors = Array.from( new Set(allProducts.map((product)=> product.colors.map(color => color)).flat()))
              const allAvaibleSizes = Array.from( new Set(allProducts.map((product)=> product.sizes.map(size => size)).flat()))

              setAllAvaibleTypes(allAvaibleTypes)
              setAllAvaibleColors(allAvaibleColors)
              setAllAvaibleSizes(allAvaibleSizes)
            }
            getCategories()
          }
      } catch(err){
        alert(
          "We encountered an issue while fetching product data. Please check your internet connection or try refreshing the page. If the problem persists, contact support."
        );
        console.error("Error fetching data from Sanity:", err);
      }

    }

    // Fetch products on the client side
    fetchProducts();
  }, []);

  // calling fiter function whenever filtered array changes
  useEffect(()=>{
    filterProducts();
    // handleSearch();
    console.log(filters)
    console.log(searchFilter)

  },[allProducts, filters, searchFilter])


  //setting values in filter array
  useEffect(()=>{
    setFilters((prev)=>(
      {
        ...prev,
        name: searchFilter,
        category:stateCategory,
        color:stateColor,
        size:stateSize
      }
      
    ))
  },[stateColor, stateSize, stateCategory, searchFilter])


  return (
    <>
      <div className="max-w-[1440px] 2xl:px-[100px] xl:px-[50px] sm:px-[16px] px-[8px]">
        <div>
          <ul className="flex ">
            <li className="flex gap-[4px] object-cover">
              Home{" "}
              <img className="object-contain" src="home/bracket.png" alt="" />
            </li>
            <li className="flex gap-[4px] object-cover">
              Casual
              <img className="object-contain" src="home/bracket.png" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-[20px]">
            <div className="w-[295px] px-[24px] py-[20px] h-[1220px] hidden lg:flex flex-col gap-[24px]">
              <div className="flex justify-between">
                <h1 className="font-bold text-[20px]">Filters</h1>
                <img src="/home/filter.png" alt="" />
              </div>
              <hr />
              <div className="flex flex-col gap-[20px]">
                {allAvaibleTypes.length !== 0
                  ? allAvaibleTypes.map((type, ind) => (
                      <Categories
                        key={ind}
                        availbleType={type}
                        stateCategory={stateCategory}
                        setStateCategory={setStateCategory}
                      />
                    ))
                  : Array(5)
                      .fill(0)
                      .map((_, ind) => <CategoryType key={ind} />)}
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="font-bold text-[20px]">Price</h1>
                <img
                  className="object-contain -rotate-90"
                  src="/home/bracket.png"
                  alt=""
                />
              </div>
              <img src="/home/Group 6.png" alt="" />
              <div className="flex justify-between px-[37px] font-bold">
                <p>50%</p>
                <p>200%</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[20px]">Colors</h1>
                <img
                  className="object-contain -rotate-90"
                  src="/home/bracket.png"
                  alt=""
                />
              </div>
              <div className="h-[90px] flex gap-[16px] flex-wrap">
                {allAvaibleColors.length !== 0
                  ? allAvaibleColors.map((color, ind) => (
                      <CategoryColors
                        key={ind}
                        setStateColor={setStateColor}
                        StateColor={stateColor}
                        color={color}
                      />
                    ))
                  : Array(6)
                      .fill(0)
                      .map((_, ind) => <ColorsSkeleton key={ind} />)}
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-[20px]">Size</h1>
                <img
                  className="object-contain -rotate-90"
                  src="/home/bracket.png"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-[8px]">
                {allAvaibleSizes.length !== 0
                  ? allAvaibleSizes.map((size, ind) => (
                      <CategorySize
                        key={ind}
                        stateSize={stateSize}
                        setStateSize={setStateSize}
                        size={size}
                      />
                    ))
                  : Array(6)
                      .fill(0)
                      .map((_, ind) => <SizesSkeleton key={ind} />)}
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="font-bold text-[20px]">Dress Style</h1>
                <img
                  className="object-contain -rotate-90"
                  src="/home/bracket.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center justify-between w-full ">
                  <p>Casual</p>
                  <img src="/home/bracket.png" alt="" />
                </div>
                <div className="flex items-center justify-between w-full ">
                  <p>Formal</p>
                  <img src="/home/bracket.png" alt="" />
                </div>
                <div className="flex items-center justify-between w-full ">
                  <p>Party</p>
                  <img src="/home/bracket.png" alt="" />
                </div>
                <div className="flex items-center justify-between w-full ">
                  <p>Gym</p>
                  <img src="/home/bracket.png" alt="" />
                </div>
                <button
                  onClick={handleSearch}
                  className="w-[247px] h-[48px] rounded-[62px] bg-black flex justify-center items-center text-white"
                >
                  Apply Filter
                </button>
              </div>
            </div>
            <div className=" flex-1  h-full">
              <div className="mb-[16px] flex items-center justify-between">
                <div className="flex gap-[5px] items-center">
                  <h1 className="font-bold md:text-[32px] text-[24px]">
                    Casual
                  </h1>
                  <p className="md:hidden text-[10px] self-end">
                    Showing 1-10 of 100 Products
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="md:block hidden">
                    Showing 1-10 of 100 Products
                  </p>
                  <div className="md:flex gap-1 hidden">
                    <p>Sort by :</p>
                    <select className="font-bold" name="" id="">
                      <option value="Most Popular">Most Popular</option>
                    </select>
                  </div>
                </div>
                <div className="block xl:hidden">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <img
                        className="lg:hidden block object-contain cursor-pointer"
                        src="/home/filter.png"
                        alt=""
                      />
                    </SheetTrigger>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>
                          <div className="flex justify-between">
                            <h1 className="font-bold text-[20px]">Filters</h1>
                            <img src="/home/filter.png" alt="" />
                          </div>
                        </SheetTitle>
                        <SheetDescription></SheetDescription>
                      </SheetHeader>
                      <div className="w-full px-[24px] py-[20px] h-[600px] overflow-y-scroll flex flex-col gap-[24px]">
                        <hr />
                        <div className="flex flex-col gap-[20px]">
                          {allAvaibleTypes.length !== 0
                            ? allAvaibleTypes.map((type, ind) => (
                                <Categories
                                  key={ind}
                                  availbleType={type}
                                  stateCategory={stateCategory}
                                  setStateCategory={setStateCategory}
                                />
                              ))
                            : Array(5)
                                .fill(0)
                                .map((_, ind) => <CategoryType key={ind} />)}
                        </div>
                        <hr />
                        <div className="flex justify-between">
                          <h1 className="font-bold text-[20px]">Price</h1>
                          <img
                            className="object-contain -rotate-90"
                            src="/home/bracket.png"
                            alt=""
                          />
                        </div>
                        <img src="/home/Group 6.png" alt="" />
                        <div className="flex justify-between px-[37px] font-bold">
                          <p>50%</p>
                          <p>200%</p>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between">
                          <h1 className="font-bold text-[20px]">Colors</h1>
                          <img
                            className="object-contain -rotate-90"
                            src="/home/bracket.png"
                            alt=""
                          />
                        </div>
                        <div className="h-[180px] flex gap-[16px] flex-wrap">
                          {allAvaibleColors.length !== 0
                            ? allAvaibleColors.map((color, ind) => (
                                <CategoryColors
                                  key={ind}
                                  setStateColor={setStateColor}
                                  StateColor={stateColor}
                                  color={color}
                                />
                              ))
                            : Array(6)
                                .fill(0)
                                .map((_, ind) => <ColorsSkeleton key={ind} />)}
                        </div>
                        <div className="flex justify-between">
                          <h1 className="font-bold text-[20px]">Size</h1>
                          <img
                            className="object-contain -rotate-90"
                            src="/home/bracket.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-wrap gap-[8px]">
                          {allAvaibleSizes.length !== 0
                            ? allAvaibleSizes.map((size, ind) => (
                                <CategorySize
                                  key={ind}
                                  stateSize={stateSize}
                                  setStateSize={setStateSize}
                                  size={size}
                                />
                              ))
                            : Array(6)
                                .fill(0)
                                .map((_, ind) => <SizesSkeleton key={ind} />)}
                        </div>
                        <hr />
                        <div className="flex justify-between">
                          <h1 className="font-bold text-[20px]">Dress Style</h1>
                          <img
                            className="object-contain -rotate-90"
                            src="/home/bracket.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                          <div className="flex items-center justify-between w-full ">
                            <p>Casual</p>
                            <img src="/home/bracket.png" alt="" />
                          </div>
                          <div className="flex items-center justify-between w-full ">
                            <p>Formal</p>
                            <img src="/home/bracket.png" alt="" />
                          </div>
                          <div className="flex items-center justify-between w-full ">
                            <p>Party</p>
                            <img src="/home/bracket.png" alt="" />
                          </div>
                          <div className="flex items-center justify-between w-full ">
                            <p>Gym</p>
                            <img src="/home/bracket.png" alt="" />
                          </div>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="w-full h-[48px] rounded-[62px] bg-black flex justify-center items-center text-white"
                          >
                            Apply Filter
                          </button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              <div className="sm:flex grid xs:grid-cols-2 justify-items-center grid-cols-1 gap-x-[14px] gap-y-[36px] sm:justify-center sm:flex-wrap">
                {filteredProducts.length !== 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      sizes={product.sizes}
                      colors={product.colors}
                      key={product._id}
                      name={product.name}
                      category={product.category}
                      isNew={product.isNew}
                      description={product.description}
                      discountPercent={product.discountPercent}
                      price={product.price}
                      stars={product.stars}
                      rating={product.rating}
                      image={product.image}
                      _id={product._id}
                    />
                  ))
                ) : allProducts.length !== 0 ? (
                  <div className='w-full flex justify-center items-center h-[100px] bg-gray-300'>No Product availble</div>
                ) : (
                  Array(6)
                    .fill(0)
                    .map((_, ind) => <ProductCardSkeleton key={ind} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page