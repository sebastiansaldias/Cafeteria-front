import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function decode_jwt(token) {
  const parts = token.split('.');
  const decodedPayload = atob(parts[1]);
  const payloadObject = JSON.parse(decodedPayload);
  return payloadObject;
}

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('token') ? localStorage.getItem('token') : null);
  const [user, setUser] = useState(() => localStorage.getItem('token') ? decode_jwt(localStorage.getItem('token')) : null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_URL_ACCESS;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      setUser(decode_jwt(token));
    }
    setLoading(false);
  }, []);

  function login(dataUser) {
    const username = dataUser.username;
    const password = dataUser.password;

    const url = `${API_URL}/api/auth/login`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Email o contraseña incorrectos');
        }
        return response.json();
      })
      .then((data) => {
        const payloadObject = decode_jwt(data.token);
        setAuthToken(data.token);
        setUser(payloadObject);

        localStorage.setItem('token', data.token);

        if (payloadObject.rol === 'CUSTOMER') {
          navigate('/');
        } else {
          navigate('/admin/AdminCoffes');
        }
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud', error);
      });
  }

  function logout() {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  }

  const contextData = {
    user,
    login,
    logout,
    authToken,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <div>Cargando...</div> : children}
    </AuthContext.Provider>
  );
}
