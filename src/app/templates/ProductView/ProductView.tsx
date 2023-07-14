import Image from 'next/image';
import React from 'react';
import { ProductContainer } from './ProductView.style';
import { toast } from "react-toastify";
import { useSession, signIn } from "next-auth/react"

interface ProductViewProps {
    name: string; 
    description: string; 
    price: number;
    images: string[]
}

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const ProductView = ({
    name, description, price, images
}: ProductViewProps) => {

    const { status } = useSession()

    const addProductToCart = async (data) => {
        try {
            const response = await fetch(`${STRAPI_API_URL}/shopping-carts`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
        
            if (!response.ok) {
              throw new Error('Failed to create Strapi entry');
            }

            toast('Product added to the cart', { hideProgressBar: true, autoClose: 2000, type: 'success' })
        
            const createdEntry = await response.json();
            return createdEntry;
        } catch (error) {
            // Handle error
            console.error('Error creating Strapi entry:', error);
            throw error;
        }
    }

    const handleAddToCart = () => {
        if(status === 'unauthenticated'){
            signIn();
        } else {
            const cart = {
                data: {
                    product: {name, description, price, images},
                    quantity: 1
                }
            };
    
            addProductToCart(cart);
        }
    }

    let priceCo = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

  return (
    <ProductContainer>
        <div className='infoProduct'>
            <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${images[0]}`}
                width={400}
                height={400}
                alt={description}
                priority={false}
            />
        
            <div className='productDetail'>
                <h2>{name}</h2>
                <span className='productDescription'>{description}</span>
                <span>{priceCo.format(price)}</span>
                <button className='cartButton' onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>

    </ProductContainer>
  )
}
export default ProductView;
