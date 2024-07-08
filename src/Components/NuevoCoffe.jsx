import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function NuevoCoffe() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setNewProduct(productToEdit);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-2xl font-bold text-center mb-8">Nuevo Coffee</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input 
              type="text" 
              name="name" 
              value={newProduct.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded" 
              placeholder="Nombre del café" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <input 
              type="text" 
              name="description" 
              value={newProduct.description} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded" 
              placeholder="Descripción del café" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Precio</label>
            <input 
              type="text" 
              name="price" 
              value={newProduct.price} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded" 
              placeholder="Precio del café" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Foto</label>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="w-full px-3 py-2 border rounded" 
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">Crear</button>
        </form>

        <table className="table-auto w-full bg-white shadow-md rounded mb-8">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Foto</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2"><img src={product.image} alt={product.name} className="h-12 w-12 object-cover" /></td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(product.id)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                  <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default NuevoCoffe;
