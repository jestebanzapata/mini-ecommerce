import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Login</li>
            </ul>
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}
