import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: 'Shranar Spices',
  description: 'Pure & Premium Indian Spices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8E7]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
