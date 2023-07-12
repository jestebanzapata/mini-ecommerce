/**
 * Here we are using the middleware provided by next-auth but we can create our own middleware with something like: 
 * @example
 * 
 * import { NextResponse } from 'next/server';
 * import type { NextRequest } from 'next/server';
 * export function middleware(request: NextRequest) {
 *   if(request.nextUrl.pathname.endsWith('/cart')){
 *       return NextResponse.redirect(new URL('/login', request.url))      
 *   }
 * }
 */
// export { default } from "next-auth/middleware"


 import { NextResponse } from 'next/server';
 import type { NextRequest } from 'next/server';
 export function middleware(request: NextRequest) {
  console.log("middleware ->", request);
   if(request.nextUrl.pathname.endsWith('/shopping-carts')){
       return NextResponse.redirect(new URL('/login', request.url))      
   }
 }
 
export const config = {
  matcher: [
    '/cart',
    '/api/shopping-carts', 
  ],
}