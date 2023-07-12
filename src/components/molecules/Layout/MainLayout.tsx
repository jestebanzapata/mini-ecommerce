'use client'

import React from 'react';
import { StyledMainLayout } from './MainLayout.style';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import en from '../../../lang/en';
import es from '../../../lang/es';

const MainLayout = ({children}) => {    
  const { locale } = useRouter();
  const t = locale === 'en' ? en: es;
  return (
    <StyledMainLayout reserve={false}>
        <nav className="topMenu">
            <Image
                src={`/logo.png`}
                width={100}
                height={30}
                alt='logo'
            />
            <ul>
                <li><Link href="/">{t.toolbar.home}</Link></li>
                <li><Link href="/cart">{t.toolbar.shoppingcart}</Link></li>
                <li><Link href="/contact">{t.toolbar.contact}</Link></li>
            </ul>
        </nav>
        <div className='mainContent'>
          {children}
        </div>
    </StyledMainLayout>
  )
}
export default MainLayout;
