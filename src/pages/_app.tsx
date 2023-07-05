import MainLayout from '@/components/molecules/Layout/MainLayout';
import "@/lib/styles/global.styles.css";
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
}

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)
  return getLayout(<>
  <Component {...pageProps} />
  <ToastContainer />
  </>);
}
