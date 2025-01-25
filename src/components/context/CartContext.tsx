"use client"
import {Cart} from "@/types/Cart"
import { UseproductsContext } from "@/components/context/ProductsContext"
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";



interface CartContextType {
 
  addToCart: (id: string) => void; 
  removeProduct: (id: string) => void; 
  incrementAmount : (id : string) => void;
  decrementAmount : (id : string) => void;
  setAmount: Dispatch<SetStateAction<number>>;
  amount : number
  cart: Cart[]
  setCart : Dispatch<SetStateAction<Cart[]>>
  totalCostPrice : number
  netPrice : number
  discount : number
}



//create context
export const cartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContext.Provider");
  }
  return context;
};


const CartContextProvider : FC<{children : ReactNode}> = ({children} ) => {
  const {allProducts} = UseproductsContext()
  const [cart, setCart] = useState<Cart[]>([])
  const [totalCostPrice, settotalCostPrice] = useState(0)
  const [netPrice, setNetPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [amount, setAmount] = useState(1)

  const color = "Blue"
  const size = "medium"

  function addToCart(id : string) : void {
    if(allProducts.length !== 0){
   const addProduct  = allProducts.find((product) => product._id === id)
   const productExists = cart.find((product) => product._id === id)
  if(!productExists && addProduct){
    setCart((prev)=>(
      [
        ...prev,
        {...addProduct, size, amount, color}
      ]
    ))
  }
}
  }

  function removeProduct(id: string){
    const newList = cart.filter((product) => product._id !== id)
    setCart(newList)
  }

  function incrementAmount(id : string){
    setCart((prev) =>(
      prev.map((product) => (product._id === id ? {...product, amount : product.amount + 1} : product))
    ))
  }

  function decrementAmount(id : string){
    setCart((prev) =>(
      prev.map((product) => (product._id === id ? {...product, amount : product.amount !== 1 ? product.amount - 1 : amount} : product))
    ))
  }


  
 function handleTotalPrice(){
   const deliveryFee = 15;
   const productsPrice = cart.map((product) => (product.price - (product.price * product.discountPercent/100)) * product.amount)
   const totalPrice = productsPrice.reduce((prev, curr) => prev + curr, 0)
   const discount = totalPrice * 20/100
   const totalNetPrice = totalPrice - discount + deliveryFee
   settotalCostPrice(totalPrice)
   setNetPrice(totalNetPrice)
   setDiscount(discount)
 }




useEffect(()=>{
  handleTotalPrice()
},[cart])

  return (
    <cartContext.Provider value={{addToCart, setAmount,amount, setCart, netPrice, discount, incrementAmount,decrementAmount, /*selectColor,  selectSize,*/ cart,removeProduct, totalCostPrice}}>
    {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider

