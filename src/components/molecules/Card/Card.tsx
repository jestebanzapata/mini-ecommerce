import React from 'react';
import { StyledCard } from './Card.style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: string;
  title: string; 
  description: string; 
  aditionalData: string;
  image: string
}

const Card = ({
  id,
  title,
  description,
  aditionalData,
  image
}: CardProps) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  }

  return (
    <StyledCard onClick={handleClick}>
      <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image}`}
          width={250}
          height={250}
          alt={description}
          priority={false}
      />
      <div className='info'>
        <h2>{title}</h2>
        <span>{description.length > 20 ? description.substring(0,20): description}</span>
        <span className='bold'>{aditionalData}</span>
      </div>
    </StyledCard>
  )
}
export default Card;
