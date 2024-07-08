import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#4B2E39] p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/logocafeteria.webp" className="h-12 rounded-full border-2 border-white" />
            <div className="text-white text-xl font-bold">Cafetería Bensal</div>
          </div>
          <div>
            <a href="/" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Inicio</a>
            <a href="/acerdade" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Acerca de</a>
            <a href="/coffes" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Coffes</a>

          </div>
          <div>
            <a href="/login" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Iniciar Sesión</a>
            <a href="/register" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Registrarse</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
