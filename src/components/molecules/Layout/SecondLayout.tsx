import React from 'react';
import { StyledMainLayout } from './MainLayout.style';
import Link from 'next/link';
import Image from 'next/image';

const SecondLayout = ({children}) => {
  return (
    <StyledMainLayout reserve={false}>
        <nav className="topMenu">
            <Image
              src={`/logo.png`}
              width={200}
              height={100}
              alt='logo'
            />
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cart">Shopping Cart</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
        <div className='mainContent'>
          {children}
        </div>
    </StyledMainLayout>
  )
}
export default SecondLayout;
