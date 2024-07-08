import React from 'react';

function ComponenteLogin() {
  return (
    <div className="lg:w-2/6 md:w-1/2 bg-[#D3C4B5] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 shadow-lg">
      <h2 className="text-[#4B2E39] text-lg font-medium title-font mb-5">Iniciar Sesión</h2>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-[#4B2E39]">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-[#8B5E3C] focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-[#4B2E39]">Contraseña</label>
        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-[#8B5E3C] focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="text-white bg-[#8B5E3C] border-0 py-2 px-8 focus:outline-none hover:bg-[#4B2E39] rounded text-lg">Acceder</button>
    </div>
  );
}

export default ComponenteLogin;
