import React, { Component } from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import ComponenteLogin from '../Components/ComponenteLogin';

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#D3C4B1] flex flex-col justify-center items-center">
            <ComponenteLogin />
        </main>
        <Footer />
    </div>
  )
}

export default Login
