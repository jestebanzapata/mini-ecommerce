import React from 'react';
import { StyledShoppingCart } from './ShoppingCart.style';
import ProductCart from '@/components/molecules/ProductCart/ProductCart';


interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface ShoppingCartProps {
    productCartList: Product[]
}

const ShoppingCart = ({
    productCartList
}: ShoppingCartProps) => {

  return (
    <StyledShoppingCart>
        <h1>Shopping Cart</h1>
        {productCartList.map(({ id, name, price, quantity, image}) => {
            return <ProductCart key={id} name={name} price={price} image={image} quantity={quantity}/>
        })}

    </StyledShoppingCart>
  );
}
export default ShoppingCart;
