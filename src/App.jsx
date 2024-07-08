import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductList from './Pages/Coffes';
import AcercaDe from './Pages/Acercade';
import AdminCoffes from './Pages/Admincoffes';
import Clientes from './Pages/Clientes'; // Importa la nueva página de Clientes

import AuthProvider from './Context/AuthContext';
import ProtectedRoute from './Context/ProtectedRoute'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/coffes" element={<ProductList />} />
            <Route path="/acerdade" element={<AcercaDe />} />
            <Route
              path="/admin/AdminCoffes"
              element={
                <ProtectedRoute roles={['ADMIN']}>
                  <AdminCoffes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/clientes"
              element={
                <ProtectedRoute roles={['ADMIN']}>
                  <Clientes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
