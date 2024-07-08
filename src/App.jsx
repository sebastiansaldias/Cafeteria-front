import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductList from './Pages/Coffes';
import AcercaDe from './Pages/Acercade';
import NuevoCoffe from './Components/NuevoCoffe';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coffes" element={<ProductList />} />
          <Route path="/acerdade" element={<AcercaDe />} />
          <Route path="/nuevocoffe" element={<NuevoCoffe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
