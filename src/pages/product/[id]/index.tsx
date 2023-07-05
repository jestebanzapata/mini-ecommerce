import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Product } from '@/lib/models/product/product';
import ProductView from '@/app/templates/ProductView/ProductView';

interface ProductDetailProps {
  product: Product
}


const ProductDetail: NextPage<any> = ({ product }) => {
  
  const { name, description, price, image } = product.attributes;
  const images = image.data.map(({attributes: {url}}) => url);
  return (
    <div>
        <ProductView
          name={name} 
          description={description}
          price={price}
          images={images}
        />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{product: ProductDetailProps}> = async ({ params }) => {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const id = params?.id;
  const res = await fetch(`${STRAPI_URL}/products/${id}?populate=*`)
  console.log("url unique -> ", `${STRAPI_URL}/products/${id}?populate=*`);
  const resultJson = await res.json();
  return { 
    props: { product: resultJson.data}, 
    // Incremental static regeneration (each 10 seconds)
    revalidate: 10,  
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  console.log("url -> ", `${STRAPI_URL}/products`);
  const response = await fetch(`${STRAPI_URL}/products`);
  const {data} = await response.json();
  console.log("productList ->", data);
  const paths = data.map(({ id }) => ({
    params: {
      id: `${id}`,
    }
  }));
  return {
    paths,
    // pages that were not static generated are going to be render as server side
    fallback: true
  }
}

export default ProductDetail;
 
