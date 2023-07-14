import React from 'react';
import { GetServerSideProps } from 'next';
import ShoppingCart from '@/app/templates/ShoppingCart/ShoppingCart';
import SecondLayout from '@/components/molecules/Layout/SecondLayout';
import { Page } from '../_app';



interface CartProps {
  products: any
}

const Cart: Page<CartProps>= ({ products }) => {
  

  const productCartList = products.map(item => {
    const {id, attributes: { product, quantity}} = item;
    return {
      id: id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: product.price,
      quantity: quantity
    };
  });
  return (
    <div>        
        <ShoppingCart productCartList={productCartList}/>
    </div>
  )
}

Cart.getLayout = function getLayout(page) {
  return (
    <SecondLayout>
     {page}
    </SecondLayout>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const response = await fetch(`${STRAPI_API_URL}/shopping-carts`)
  const result = await response.json();

  return { props: { products:  result.data} }
}



export default Cart;
 
