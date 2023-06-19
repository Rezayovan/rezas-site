import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reza',
  description: 'Rezas app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let routes = ["about", "projects", "resumé"]
  return (
    <html lang="en">
    <div>
        <NavBar navs={routes}/>
        <body className={inter.className}>{children}</body>
    </div>
    </html>
  )
}
