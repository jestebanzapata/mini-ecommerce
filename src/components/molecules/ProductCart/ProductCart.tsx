import Image from 'next/image';
import React from 'react';
import { StyledProductCart } from './ProductCart.style';

interface ProductCartProps {
    name: string; 
    quantity: number;
    price: number;
    image: string
}

const ProductCart = ({
    name, quantity, price, image
}: ProductCartProps) => {
    const totalPrice = price * quantity;

    let priceCo = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });
  return (
    <StyledProductCart>
        <div className='product'>
            <Image
                src={`http://localhost:1337${image}`}
                width={50}
                height={50}
                alt={name}
            />
            <div className='productInfo'>
                <h2>{name}</h2>
                <span>Amount: {quantity}</span>
                
                <span>{priceCo.format(totalPrice)}</span>
            </div>
        </div>
        <div className='separator'/>
    </StyledProductCart>
  )
}
export default ProductCart;
