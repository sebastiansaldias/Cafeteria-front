import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import ComponenteRegistro from '../Components/ComponenteRegistro';

function Register() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#D3C4B1] flex flex-col justify-center items-center">
            <ComponenteRegistro />
        </main>
        <Footer />
    </div>
  )
}

export default Register
