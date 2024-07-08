import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import ProductCard from '../Components/ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: 'Espresso', price: '4.500', image: '/cafe-expresso.webp', description: 'Un café fuerte y concentrado, usado de base para otras bebidas.' },
    { id: 2, name: 'Americano', price: '5.500', image: '/cafe-americano.jpg', description: 'Un espresso con agua caliente, menos concentrado que el primero.' },
    { id: 3, name: 'Cappuccino', price: '6.000', image: '/Cappuccino_at_Sightglass_Coffee.jpg', description: 'Espresso con leche vaporizada y espuma, en partes iguales.' },
    { id: 4, name: 'Latte', price: '6.500', image: '/cafe-latte.webp', description: 'Espresso con más leche vaporizada y un poco de espuma de leche.' },
  ];

  return (
    <>
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center mb-6">
          <input 
            type="text" 
            placeholder="Nombre Coffee" 
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]"
          />
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 lg:w-1/4 md:w-1/2 w-full">
              <ProductCard 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                description={product.description} 
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
