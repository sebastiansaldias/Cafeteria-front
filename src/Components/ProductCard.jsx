import React, { useState } from 'react';

function ProductCard({ name, price, image, description }) {
  const [showModal, setShowModal] = useState(false);
  const [opinion, setOpinion] = useState('');

  const handleOpinionSubmit = () => {
    // Aquí puedes manejar el envío de la opinión, por ejemplo, enviarla a un servidor.
    console.log(`Opinión sobre ${name}: ${opinion}`);
    setShowModal(false);
  };

  return (
    <div className="h-full bg-[#D3C4B5] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center mb-4" src={image} alt={name} />
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CAFÉ</h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{name}</h1>
      <p className="leading-relaxed mb-3">{description}</p>
      <p className="text-lg font-semibold mb-3">${price}</p>
      <button onClick={() => setShowModal(true)} className="text-white bg-[#8B5E3C] border-0 py-2 px-8 focus:outline-none hover:bg-[#4B2E39] rounded text-lg">Opiniones</button>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-center overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Opinión sobre {name}</h2>
              <textarea
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]"
                rows="4"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
                placeholder="Escribe tu opinión aquí..."
              />
              <div className="mt-4 flex justify-between">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
                <button onClick={handleOpinionSubmit} className="px-4 py-2 bg-[#8B5E3C] text-white rounded hover:bg-[#4B2E39]">Enviar</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProductCard;
