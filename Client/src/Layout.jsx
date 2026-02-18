import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    {/* This is where the page content changes */}
    <main className="flex-grow p-6 bg-gradient-to-br from-gray-50 to-gray-100 mx-6 rounded-lg">
      <Outlet/>
    </main>

    <Footer />
  </div>
  )
}

export default Layout
