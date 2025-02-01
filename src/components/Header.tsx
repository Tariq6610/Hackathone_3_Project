"use client"
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";

import { useCartContext } from './context/CartContext';
import {useState } from 'react';
import { UseproductsContext } from './context/ProductsContext';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { scroller } from 'react-scroll';


const Header = () => {
const router = useRouter();
const pathname = usePathname()
const isHome = pathname === '/';
const {cart} = useCartContext()
const {searchFilter, setSearchFilter} = UseproductsContext()
const [crossClicked, setcrossClicked] = useState(false)
const [isOpen, setIsOpen] = useState(false);


 function goToCategoriesPage(){
    setIsOpen(false)
    setTimeout(()=>{
      router.push('/category')
    },500)
 }


function navigateTo(targetedSection : string){
  setIsOpen(false);
  if(isHome){
    scroller.scrollTo(targetedSection,{
      duration: 500,
      smooth: true,
      offset: -70
    })
  }else{
    setTimeout(()=>{
      router.push('/');
    },500)
    setTimeout(()=>{
      scroller.scrollTo(targetedSection,{
        duration: 500,
        smooth: true,
        offset: -70
      })
    },1000)
  }
}

  return (
    <>
      {crossClicked === false && (
        <div className="bg-black ">
          <nav className="flex max-w-[1440px] mx-auto 2xl:px-[100px] xl:px-[50px] px-[16px] md:justify-end justify-center xl:gap-[231px] gap-[10px] md:gap-[100px] h-[48px]  text-white items-center">
            <div className="flex  gap-[8px]">
              <p className="md:text-[16px] text-[10px]">
                Sign up and get 20% off to your first order.{" "}
              </p>
              <button className="font-bold md:text-[16px] text-[10px] underline">
                Sign Up Now
              </button>
            </div>
            <div className="">
              <button onClick={() => setcrossClicked(true)} className="w-10">
                X
              </button>
            </div>
          </nav>
        </div>
      )}

      <header className="flex sticky top-0 z-50 justify-center   flex-col w-full">
        <nav className="md:h-[70px] w-full h-[50px] flex bg-white items-center mx-auto justify-between max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[16px] ">
          <div className="flex  gap-[40px] w-full justify-between  items-center">
            <div className="flex gap-[16px] items-center">
              <div className="block xl:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <div>
                      <IoMenu className="text-3xl" />
                    </div>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>
                        <div className="flex mt-4 items-center justify-between">
                          <h1 className="text-[24px] mb-4 font-extrabold tracking-tight">
                            SHOP.CO
                          </h1>
                          <div
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-[14px] w-[62px]"
                          >
                            <Link href="/cart">
                              <img
                                className="object-contain w-7"
                                src="/home/cart.png"
                                alt=""
                              />
                            </Link>
                            <img
                              className="object-contain w-7"
                              src="/home/profile.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <div className='flex items-center'>
                      <Link href="/category">
                        <img
                          onClick={() => setIsOpen(false)}
                          className="object-contain"
                          src="/home/search.png"
                          alt="search"
                        />
                      </Link>
                      <input
                        onChange={(e) => {
                          setSearchFilter(e.target.value);
                        }}
                        value={searchFilter}
                        className="2xl:w-[577px] xl:w-[430px] lg:w-[300px] h-[48px] xl:flex rounded-[48px] ps-[30px] outline-none"
                        type="text"
                        placeholder="What are you looking for ?"
                        name=""
                        id=""
                      />
                    </div>
                    <ul className="flex flex-col gap-[24px]">
                      <Select onValueChange={goToCategoriesPage}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="SHOP" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">Casual</SelectItem>
                          <SelectItem value="Formal">Formal</SelectItem>
                          <SelectItem value="Party">Party</SelectItem>
                          <SelectItem value="Gym">Gym</SelectItem>
                        </SelectContent>
                      </Select>
                        <li onClick={() =>  {navigateTo('onSaleSection')}} className="w-[64px] cursor-pointer">On Sale</li>
                        <li onClick={() =>  {navigateTo("NewArrivalSection")}} className="w-[90px] cursor-pointer">
                          New Arrivals
                        </li>
                        <li onClick={() => {navigateTo("brandsSection")}} className="w-[60px] cursor-pointer">Browse</li>
                    </ul>
                  </SheetContent>
                </Sheet>
              </div>
              <h1 className="md:text-[32px] text-[24px] font-extrabold tracking-tight">
                SHOP.CO
              </h1>
            </div>
            <ul className="xl:flex hidden items-center gap-[24px]">
              <Select onValueChange={goToCategoriesPage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="SHOP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dark">Casual</SelectItem>
                  <SelectItem value="Formal">Formal</SelectItem>
                  <SelectItem value="Party">Party</SelectItem>
                  <SelectItem value="Gym">Gym</SelectItem>
                </SelectContent>
              </Select>
                <li onClick={() =>  {navigateTo('onSaleSection')}} className="w-[64px] cursor-pointer underline-offset-4 hover:underline">On Sale</li>
                <li onClick={() =>  {navigateTo("NewArrivalSection")}} className="w-[90px] cursor-pointer underline-offset-4 hover:underline">New Arrivals</li>
                <li onClick={() => {navigateTo("brandsSection")}} className="w-[60px] cursor-pointer underline-offset-4 hover:underline">Browse</li>
            </ul>
            <div className="sm:flex hidden gap-[14px] xl:gap-[24px] items-center ">
              <div className="flex items-center">
                <Link href="/category">
                  <img
                    className="object-contain hover:scale-110"
                    src="/home/search.png"
                    alt="search"
                  />
                </Link>
                <input
                  onChange={(e) => {
                    setSearchFilter(e.target.value);
                  }}
                  value={searchFilter}
                  className="2xl:w-[577px] xl:w-[430px] lg:w-[300px] h-[48px] hidden xl:flex rounded-[48px] ps-[30px] outline-none"
                  type="text"
                  placeholder="What are you looking for testing?"
                  name=""
                  id=""
                />
              </div>
              <div className="flex md:gap-[14px] gap-2 w-[62px]">
                <div className="relative">
                  <Link href="/cart">
                    <img
                      className="object-contain min-w-[24px] hover:scale-110"
                      src="/home/cart.png"
                      alt=""
                    />
                  </Link>
                  {cart.length !== 0 && (
                    <div className="absolute w-3 h-3 bg-red-500 rounded-full top-[-7px] font-bold flex justify-center items-center text-white text-[10px] right-0">
                      {cart.length}
                    </div>
                  )}
                </div>
                <img
                  className="object-contain w-[24px] min-w-[24px]"
                  src="/home/profile.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header