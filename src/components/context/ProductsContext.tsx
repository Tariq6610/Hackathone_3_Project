"use client"
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import type { Product } from "@/types/Product";

interface productsContextType{
    allProducts : Product[];
    setAllProducts : Dispatch<SetStateAction<Product[]>>
    newProducts : Product[];
    setNewProducts : Dispatch<SetStateAction<Product[]>>
    topProducts : Product[];
    setTopProducts : Dispatch<SetStateAction<Product[]>>
    recomendedProducts : Product[];
    setRecomendedProducts : Dispatch<SetStateAction<Product[]>>
    allAvaibleTypes : string[];
    searchFilter:string
    setSearchFilter : Dispatch<SetStateAction<string>>
}


//create context
export const productsContext = createContext<productsContextType | undefined>(undefined)

export const UseproductsContext = () => {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContext.Provider");
  }
  return context;
};

const ProductsContextProvider : FC<{children : ReactNode}> = ({children} ) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [recomendedProducts, setRecomendedProducts] = useState<Product[]>([]);
  const [allAvaibleTypes, setallAvaibleTypes] = useState<string[]>([])
  const [searchFilter, setSearchFilter] = useState<string>('')



  useEffect(()=>{
    if(allProducts.length !== 0){
    function getCategories(){
      const categories = Array.from( new Set(allProducts.map((product)=> product.category))) 
      setallAvaibleTypes(categories)
    }
    getCategories()
  }
  },[allProducts])

    return(
        <productsContext.Provider value={{setSearchFilter, searchFilter, allProducts, allAvaibleTypes, newProducts, topProducts, recomendedProducts, setAllProducts, setNewProducts, setTopProducts, setRecomendedProducts}}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextProvider;