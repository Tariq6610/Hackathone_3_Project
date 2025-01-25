"use client"
import Brawse from "@/components/Brawse";
import Customer from "@/components/Customer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TopProducts from "@/components/TopProducts";
import { client } from "@/sanity/lib/client";
import { UseproductsContext } from "@/components/context/ProductsContext";
import { useEffect } from "react";
import { Product } from "@/types/Product";



export default function Home() {
  const {setAllProducts, setNewProducts} = UseproductsContext()
  useEffect(() => {
    async function fetchProducts() {
      try {
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

        const products = {
          allProducts,
          newProducts: allProducts.filter((product) => product.isNew === true),
        };

        console.log("allProducts", allProducts && allProducts);

        // Save to local storage
        localStorage.setItem("products", JSON.stringify(products));

        // Update state
        setAllProducts(products.allProducts);
        setNewProducts(products.newProducts);
      } catch (err) {
        alert(
          "We encountered an issue while fetching product data. Please check your internet connection or try refreshing the page. If the problem persists, contact support."
        );
        console.error("Error fetching data from Sanity:", err);
      }
    }

    // Fetch products on the client side
    fetchProducts();
  }, []);
  return (
    <>
    <Hero />
    <NewArrivals />
    <TopProducts />
    <Brawse />
    <Customer />
    </>
  );
}
