import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Switch from '../Components/Switch';

const Clientes = () => {
  const [users, setUsers] = useState([]);
  const accessToken = localStorage.getItem('token');
  const userRoles = JSON.parse(localStorage.getItem('roles')) || [];
  const API_URL = "http://localhost:8080";

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(`http://localhost:8080/api/user/obtener`, { // Especificar que es una solicitud GET
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 403) {
          alert('No tienes permiso para acceder a esta información.');
          return;
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('ERROR al obtener los Usuarios:', error);
        alert('Ha ocurrido un error al obtener los Usuarios');
      }
    }
    getUsers();
    
  }, []);

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
            {users.map((user, index) => (
              <tr key={user.username} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex justify-center">
                    <Switch username={user.username} state={user.disabled} token={accessToken} />
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{user.locked ? 'Yes' : 'No'}</td>
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
