import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Tarjetasinicio from '../Components/Tarjetasinicio';


function Inicio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#F7F5F2] flex flex-col justify-center items-center relative">
        <div className="relative w-full h-full">
          <img className='h-auto w-full object-cover' src="/ImagenIniciocafe.jpg" />
          <div className="bg-black opacity-60 absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
            <h1 className="text-8xl font-bold text-[#8B5E3C]">Cafetería Bensal</h1>
            <p className="text-xl text-[#A38671]">Un café, una sonrisa</p>
          </div>
        </div>
        <div className="bg-[#D3C4B5] p-4 w-full h-20 flex items-center justify-center">
          <p className="text-lg text-[#4B2E39]">Bienvenido a Cafetería Bensal, donde cada taza cuenta una historia.</p>
        </div>
        <Tarjetasinicio />
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;
