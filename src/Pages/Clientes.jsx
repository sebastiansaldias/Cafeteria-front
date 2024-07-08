import React from 'react';
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'

const Clientes = () => {
  const clientes = [
    { username: 'xxxxx', email: 'xxxxx', disable: 'xxxxx', locked: 'xxxxx' },
    { username: 'xxxxx', email: 'xxxxx', disable: 'xxxxx', locked: 'xxxxx' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Clientes</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Username</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Disable</th>
              <th className="py-2 px-4 border-b border-gray-200">Locked</th>
              <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{cliente.username}</td>
                <td className="py-2 px-4 border-b border-gray-200">{cliente.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{cliente.disable}</td>
                <td className="py-2 px-4 border-b border-gray-200">{cliente.locked}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button className="bg-orange-400 text-white py-1 px-3 rounded">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Clientes;
