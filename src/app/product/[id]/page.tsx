import React from 'react'
import Detail from '@/components/Detail'
import { Product } from '@/types/Product';
import { client } from '@/sanity/lib/client';



interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const allProducts: Product[] = await client.fetch(`
    *[_type == "products"]{
      _id
    }
  `);

  return allProducts.map((product) => ({
    id: product._id,
  }));
}

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return <Detail id={id} />;
};

export default Page;