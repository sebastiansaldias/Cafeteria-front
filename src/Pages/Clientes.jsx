import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const Clientes = () => {
  const [users, setUsers] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});
  const accessToken = localStorage.getItem('token');
  const userRoles = JSON.parse(localStorage.getItem('roles')) || [];
  const API_URL = import.meta.env.VITE_URL_ACCESS;

  async function handleCheckboxChange(username, currentState) {
    const status = currentState ? 'disable' : 'enable';

    try {
      setLoadingStates(prevState => ({ ...prevState, [username]: true }));
      const response = await fetch(`${API_URL}/api/auth/${username}/${status}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update user status');
      }

      const data = await response.json();
      alert(data.message);
      setUsers(prevUsers => prevUsers.map(user => 
        user.username === username ? { ...user, disabled: !currentState } : user
      ));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoadingStates(prevState => ({ ...prevState, [username]: false }));
    }
  }

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(`${API_URL}/api/user/`, {
          method: 'GET',
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

   
  }, [API_URL, accessToken, userRoles]);

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
                    <input
                      type="checkbox"
                      checked={!user.disabled}
                      onChange={() => handleCheckboxChange(user.username, user.disabled)}
                      disabled={!userRoles.includes('ADMIN') || loadingStates[user.username]}
                    />
                    {loadingStates[user.username] && <span className="ml-2 text-sm text-gray-500">Loading...</span>}
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
