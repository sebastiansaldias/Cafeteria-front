import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-[#4B2E39] p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/logocafeteria.webp" className="h-12 rounded-full border-2 border-white" />
            <div className="text-white text-xl font-bold">Cafetería Bensal</div>
          </div>
          <div>
            <Link to="/" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Inicio</Link>
            <Link to="/acerdade" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Acerca de</Link>
            <Link to="/coffes" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Coffes</Link>
            {user && user.rol === 'ADMIN' && (
              <>
                <Link to="/admin/AdminCoffes" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Admin Coffes</Link>
                <Link to="/admin/clientes" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Clientes</Link>
              </>
            )}
          </div>
          <div>
            {user ? (
              <button onClick={logout} className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Cerrar Sesión</button>
            ) : (
              <>
                <Link to="/login" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Iniciar Sesión</Link>
                <Link to="/register" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#6D4A55] hover:text-white transition duration-300">Registrarse</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;