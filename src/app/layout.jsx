import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <header>
          <nav>
            <p><Link href="/produtos/tenis">TENIS</Link></p>
            <p><Link href="/produtos/camisa">CAMISA</Link></p>
            <p><Link href="/produtos/meia">MEIA</Link></p>
            <p><Link href="/produtos/calca">CALÇA</Link></p>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy;Todos os direitos reservados - 2023</p>
        </footer>
        
        </body>
    </html>
  )
}
